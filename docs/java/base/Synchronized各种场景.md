# Synchronized关键字

参考文章：

https://blog.csdn.net/MyronCham/article/details/112455589

https://zhuanlan.zhihu.com/p/180469207

 ## Synchronized简介

1. 被synchronized修饰的代码块或者方法，如果多线程并发访问情况下，多个线程拿到的是同一把锁，那么可以保证线程安全。

2. synchronized是可重入锁、非公平锁，synchronized和volatile关键字的区别。

   - synchronized可重入锁的实现原理：
     synchronized底层的实现原理是利用计算机系统的mutex Lock实现。每一个可重入锁都会关联一个线程ID和一个锁状态status。当一个线程请求方法时，会去检查锁状态，如果锁状态是0，代表该锁没有被占用，直接进行CAS操作获取锁，将线程ID替换成自己的线程ID。如果锁状态不是0，代表有线程在访问该方法。此时，如果线程ID是自己的线程ID，如果是可重入锁，会将status自增1，然后获取到该锁，进而执行相应的方法。如果是非重入锁，就会进入阻塞队列等待。
     释放锁时，可重入锁，每一次退出方法，就会将status减1，直至status的值为0，最后释放该锁。
     释放锁时，非可重入锁，线程退出方法，直接就会释放该锁。所以，从一定程度上来说，可重入锁可以避免死锁的发生。
   - synchronized 使用的是非公平锁，并且是不可设置的。这是因为非公平锁的吞吐量大于公平锁，并且是主流操作系统线程调度的基本选择，所以这也是 synchronized 使用非公平锁原由。
   - 区别：
     - synchronized 既能保证可见性（加锁后只有一个线程能访问，自然没有什么可见性问题），又能保证原子性，而 volatile 只能保证可见性，无法保证原子性。比如，i++ 如果使用 synchronized 修饰是线程安全的，而 volatile 会有线程安全的问题。

3. synchronized的使用方式

   1. 修饰方法，对当前实例对象加锁

      ```java
      public synchronized void method(){}
      ```

   2. 修饰静态方法：对当前类加锁

      ```java
      public synchronized static void method() {}
      ```

   3. 代码块形式：可指定加锁对象，class就是类锁，this就是对象锁

      ```java
      public void method() {
        synchronized(这里可以是 Class 或者 this) {
        }
      }
      ```

## synchronized常见问题（是否能理解类锁和对象锁）

### 两个线程同时访问同一个对象的同步方法

#### 代码验证

```java
public class TestClass {

    public synchronized void method() {
        try {
            System.out.println(Thread.currentThread().getName() + "----start");
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "----end");
    }
    
    public static void main(String[] args) {

        TestClass testClass1 = new TestClass();

        new Thread(()->testClass1.method(),"AAAA").start();
        new Thread(()->testClass1.method(),"BBBB").start();
        /*  输出结果
            AAAA----start
            AAAA----end
            BBBB----start
            BBBB----end
         */
    }

}
```

可见，其运行是阻塞运行的，线程安全，因为是同一把对象锁。

### 两个线程同时访问两个对象的同步方法

#### 代码验证

```java
public class TestClass {

    public synchronized void method() {
        try {
            System.out.println(Thread.currentThread().getName() + "----start");
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "----end");
    }

    public static void main(String[] args) {

        TestClass testClass1 = new TestClass();
        TestClass testClass2 = new TestClass();

        new Thread(()->testClass1.method(),"AAAA").start();
        new Thread(()->testClass2.method(),"BBBB").start();
        /*  输出结果
            AAAA----start
            BBBB----start
            AAAA----end
            BBBB----end
         */
    }
}

```

可见，A、B并行执行，非线程安全，因为两个对象，就是两把对象锁，不能进行阻塞。

## 两个线程同时访问一个对象的静态同步方法

#### 代码验证

```java
public class TestClass {

    public static synchronized void method() {
        try {
            System.out.println(Thread.currentThread().getName() + "----start");
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "----end");
    }

    public static void main(String[] args) {


        new Thread(()->TestClass.method(),"AAAA").start();
        new Thread(()->TestClass.method(),"BBBB").start();
        /*  输出结果
            AAAA----start
            AAAA----end
            BBBB----start
            BBBB----end
         */
    }
}
```

可见线程安全，因为拿到的都是一把类锁。

## 两个线程分别同时访问一个对象的同步方法和非同步方法

#### 代码验证

```java
public class TestClass {

    //同步方法
    public synchronized void method() {
        try {
            System.out.println(Thread.currentThread().getName() + "----synchronizedstart");
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "----synchronizedend");
    }

    //非同步方法
    public void method2() {
        try {
            System.out.println(Thread.currentThread().getName() + "----start");
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "----end");
    }


    public static void main(String[] args) {

        TestClass testClass  = new TestClass();

        new Thread(()->testClass.method(),"AAAA").start();
        new Thread(()->testClass.method2(),"BBBB").start();
        
        /* 运行结果
            AAAA----synchronizedstart
            BBBB----start
            BBBB----end
            AAAA----synchronizedend
         */

    }
}

```

可见非线程安全，因为非同步方法不受其他同步方法影响，仍然非线程安全。

## 两个线程访问同一个对象中的同步方法，同步方法内又调用一个非同步方法

#### 代码验证

```java
public class TestClass {

    //同步方法内调用非同步方法
    public synchronized void method() {
        try {
            System.out.println(Thread.currentThread().getName() + "----synchronizedstart");
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "----synchronizedend");
        //注意这里调用了方法
        method2();
    }

    //非同步方法
    public void method2() {
        try {
            System.out.println(Thread.currentThread().getName() + "----start");
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "----end");
    }


    public static void main(String[] args) {

        TestClass testClass  = new TestClass();

        new Thread(()->testClass.method(),"AAAA").start();
        new Thread(()->testClass.method(),"BBBB").start();

        /* 运行结果
            AAAA----synchronizedstart
            AAAA----synchronizedend
            AAAA----start
            AAAA----end
            BBBB----synchronizedstart
            BBBB----synchronizedend
            BBBB----start
            BBBB----end
         */

    }
}

```

**可见这种情况下是线程安全的，但是当此时有另一个线程直接调用 非同步方法，那就会产生问题，如下：**

```java
public class TestClass {

    //同步方法内调用非同步方法
    public synchronized void method() {
        try {
            System.out.println(Thread.currentThread().getName() + "----synchronizedstart");
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "----synchronizedend");
        //注意这里调用了方法
        method2();
    }

    //非同步方法
    public void method2() {
        try {
            System.out.println(Thread.currentThread().getName() + "----start");
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "----end");
    }


    public static void main(String[] args) {

        TestClass testClass  = new TestClass();

        new Thread(()->testClass.method(),"AAAA").start();
        new Thread(()->testClass.method(),"BBBB").start();
        new Thread(()->testClass.method2(),"CCCCCCCCCCC").start();

        /* 运行结果
            AAAA----synchronizedstart
            CCCCCCCCCCC----start
            CCCCCCCCCCC----end
            AAAA----synchronizedend
            AAAA----start
            AAAA----end
            BBBB----synchronizedstart
            BBBB----synchronizedend
            BBBB----start
            BBBB----end
         */

    }
}

```

因为非同步方法不会阻塞运行，当A运行时，C也同时运行，那么会产生并行访问非同步方法，同样是非线程安全的。

总结：如果没有第三个线程直接调用非同步方法，那么是线程安全的，如果有，那么不是线程安全的。



## 两个线程同时访问同一个对象的不同的同步方法

#### 代码验证

```java
public class TestClass {

    //同步方法1
    public synchronized void method() {
        try {
            System.out.println(Thread.currentThread().getName() + "----start");
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "----end");
    }

    //同步方法2
    public synchronized void method2() {
        try {
            System.out.println(Thread.currentThread().getName() + "----start");
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "----end");
    }


    public static void main(String[] args) {

        TestClass testClass  = new TestClass();

        new Thread(()->testClass.method(),"AAAA").start();
        new Thread(()->testClass.method2(),"BBBB").start();

        /* 运行结果
            AAAA----start
            AAAA----end
            BBBB----start
            BBBB----end
         */

    }
}
```

可见是线程安全的，因为默认锁对象为this对象，也就是对象锁，同一个对象当然是同一把锁。

## 两个线程分别同时访问同一对象的静态synchronized和非静态synchronized方法

#### 代码验证

```java
public class TestClass {

    //静态同步方法
    public static synchronized void method() {
        try {
            System.out.println(Thread.currentThread().getName() + "----start");
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "----end");
    }

    //非静态同步方法
    public synchronized void method2() {
        try {
            System.out.println(Thread.currentThread().getName() + "----start");
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "----end");
    }


    public static void main(String[] args) {

        TestClass testClass  = new TestClass();

        new Thread(()->TestClass.method(),"AAAA").start();
        new Thread(()->testClass.method2(),"BBBB").start();

        /* 运行结果
            AAAA----start
            BBBB----start
            AAAA----end
            BBBB----end
         */

    }
}
```

可见非线程安全，为什么呢？因为一个是类锁，一个是对象锁，两把锁都不一样，自然不会阻塞运行。

## 同步方法抛出异常后，JVM会自动释放锁的情况

在一个线程的同步方法中出现异常的时候，会释放锁，另一个线程得到锁，继续执行。而不会出现一个线程抛出异常后，另一个线程一直等待获取锁的情况。这是因为JVM在同步方法抛出异常的时候，会自动释放锁对象。

如果原来是线程安全的，那抛出异常后仍是线程安全的。可以在上述例子中找一个线程安全的例子，使其方法抛出异常进行测试。

## synchronized和Lock锁

### 区别

1. **synchronized:** 底层使用指令码方式来控制锁的，映射成字节码指令就是增加来两个指令：monitorenter和monitorexit。当线程执行遇到monitorenter指令时会尝试获取内置锁，如果获取锁则锁计数器+1，如果没有获取锁则阻塞；当遇到monitorexit指令时锁计数器-1，如果计数器为0则释放锁。

   **Lock:** 底层是CAS乐观锁，依赖AbstractQueuedSynchronizer类，把所有的请求线程构成一个CLH队列。而对该队列的操作均通过Lock-Free（CAS）操作。

2. **synchronized:** 1、以获取锁的线程执行完同步代码，释放锁 2、线程执行发生异常，jvm会让线程释放锁

   **Lock:** 在finally中必须释放锁，不然容易造成线程死锁

3. **synchronized:** 可重入 不可中断 非公平

   **Lock:** 可重入 可判断 可公平亦可非公平

### Lock的使用例子



