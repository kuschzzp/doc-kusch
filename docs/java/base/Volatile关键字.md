# Volatile关键字及重排序

## 重排序简单例子一

原文链接：https://www.cnblogs.com/xd502djj/p/9873067.html

下面代码会出现输出了stop，但是程序不会停止的情况！

``` java
public class VolatileTest extends Thread {
    /**
     * 加volatile关键字，强制其去堆内存取值，而不是使用其拷贝的变量副本，
     * 因为修改值之后 极大可能 并没有及时将值同步到堆内存中！
     */
    boolean flag = false;
    int i = 0;
    /**
     * while (!flag)进行判断的flag 是在线程工作内存当中获取，而不是从堆内存中获取。
     * i++; 将线程内存中的i++; 加完以后将结果写回至堆内存，如此重复。
     */
    @Override
    public void run() {
        while (!flag) {
            i++;
        }
    }
    public static void main(String[] args) throws Exception {
        VolatileTest vt = new VolatileTest();
        vt.start();
        Thread.sleep(2000);
        //主线程将vt.flag的值同样 从主内存中拷贝到自己的线程工作内存 然后修改flag=true. 然后再将新值回到主内存。
        vt.flag = true;
        System.out.println("stop==>" + vt.i);
    }
}
```

**此时将 `boolean flag = false;` 加上关键字 `volatile` 即可使每一次都是去堆内存取最新值，而不是用拷贝的值。**

## 重排序简单例子二

原文链接找不到了......

``` java
/**
 * 一个简单的展示Happen-Before的例子.
 * 这里有两个共享变量:a和flag,初始值分别为0和false.在ThreadA中先给     a=1,然后flag=true.
 * 如果按照有序的话,那么在ThreadB中如果if(flag)成功的话,则应该a=1,而a=a*1之后a仍然为1,下方的if(a==0)应该永远不会为
 * 真,永远不会打印.
 * 但实际情况是:在试验100次的情况下会出现0次或几次的打印结果,而试验1000次结果更明显,有十几次打印.
 */
public class SimpleHappenBefore {
    private static int a = 0;
    private static boolean flag = false;
    public static void main(String[] args) throws InterruptedException {
        //由于多线程情况下未必会试出重排序的结论,所以多试一些次
        for (int i = 0; i < 1000; i++) {
            ThreadA threadA = new ThreadA();
            ThreadB threadB = new ThreadB();
            threadA.start();
            threadB.start();
            //join(),此处为例：主线程执行到这里,会先让线程A执行完成，主线程才能继续执行。
            threadA.join();
            threadB.join();
            a = 0;
            flag = false;
        }
    }
    static class ThreadA extends Thread {
        @Override
        public void run() {
            a = 1;
            flag = true;
        }
    }
    static class ThreadB extends Thread {
        @Override
        public void run() {
            if (flag) {
                a = a * 1;
            }
            if (a == 0) {
                System.out.println("ha,a==0");
            }
        }
    }
}
```
