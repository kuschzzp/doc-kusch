# 单例模式


## 懒汉式单例模式

**二话不说直接上代码**

```java
/**
 * 懒汉式单例模式
 */
public class App {
    public static void main(String[] args) {
        new Thread(() -> {
            HelloNiuBi helloNiuBiInstance = HelloNiuBi.getHelloNiuBiInstance();
            System.out.println(helloNiuBiInstance);
        }).start();

        new Thread(() -> {
            HelloNiuBi helloNiuBiInstance = HelloNiuBi.getHelloNiuBiInstance();
            System.out.println(helloNiuBiInstance);
        }).start();

    }
}
class HelloNiuBi {
    private static volatile HelloNiuBi helloNiuBiInstance;
    //私有构造器
    private HelloNiuBi() {
    }
    /**
     * 1. 如果instance有值就不需要加锁，为空就加锁
     * 2. 情况一：若果两个线程过来，T1线程为空，获得一个实例，T2线程为空，获得一个实例，此时也会产生多个实例，
     * 所以需要在synchronized代码块中再判断一次是否为空。、
     * 3. 字节码层面可能会对指令重排序(1,分配空间;2,引用赋值;3,初始化(2,3可能被重排序)),
     * 所以需要对变量使用volatile关键字进行禁止重排序。
     */
    public static HelloNiuBi getHelloNiuBiInstance() {
        if (helloNiuBiInstance == null) {
            synchronized (HelloNiuBi.class) {
                if (helloNiuBiInstance == null) {
                    helloNiuBiInstance = new HelloNiuBi();
                }
            }
        }
        return helloNiuBiInstance;
    }
}
```