## 环境

**springboot、mybatisPlus、mysql8**

`mysql8（部署在1核2G的服务器上，很卡，所以下面的数据条数用5000，太大怕不是要等到花儿都谢了 0.0）`

## 原始的for循环入库

```java

@Service
@Slf4j
public class MoreTestServiceImpl extends ServiceImpl<MoreTestMapper, MoreTestEntity> implements MoreTestService {

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Object doTest() {
        long start = System.currentTimeMillis();

        List<MoreTestEntity> entityList = new ArrayList<>();
        for (int i = 0; i < 5000; i++) {
            MoreTestEntity entity = new MoreTestEntity();
            entity.setId((long) i);
            entity.setA(UUID.randomUUID().toString());
            entity.setB(UUID.randomUUID().toString());
            entity.setC(UUID.randomUUID().toString());
            entity.setD(UUID.randomUUID().toString());
            entity.setE(UUID.randomUUID().toString());
            entity.setF(UUID.randomUUID().toString());
            entity.setG(UUID.randomUUID().toString());
            entity.setH(UUID.randomUUID().toString());
            entity.setI(UUID.randomUUID().toString());
            entity.setJ(UUID.randomUUID().toString());
            entity.setK(UUID.randomUUID().toString());
            entityList.add(entity);
						
            //在循环中入库
            baseMapper.insert(entity);
        }

        long end = System.currentTimeMillis();

        System.err.println(end - start);

        return end - start;
    }
}
```

> 共耗时：180121 ms

## 批量保存操作

```java

@Service
@Slf4j
public class MoreTestServiceImpl extends ServiceImpl<MoreTestMapper, MoreTestEntity> implements MoreTestService {

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Object doTest() {
        long start = System.currentTimeMillis();

        List<MoreTestEntity> entityList = new ArrayList<>();
        for (int i = 0; i < 5000; i++) {
            MoreTestEntity entity = new MoreTestEntity();
            entity.setId((long) i);
            entity.setA(UUID.randomUUID().toString());
            entity.setB(UUID.randomUUID().toString());
            entity.setC(UUID.randomUUID().toString());
            entity.setD(UUID.randomUUID().toString());
            entity.setE(UUID.randomUUID().toString());
            entity.setF(UUID.randomUUID().toString());
            entity.setG(UUID.randomUUID().toString());
            entity.setH(UUID.randomUUID().toString());
            entity.setI(UUID.randomUUID().toString());
            entity.setJ(UUID.randomUUID().toString());
            entity.setK(UUID.randomUUID().toString());
            entityList.add(entity);
        }
				
      	//mybatisPlus提供的批量保存方法，数字代表每几条数据提交一次事务，默认1000
        saveBatch(entityList, 1000);

        long end = System.currentTimeMillis();

        System.err.println(end - start);

        return end - start;
    }
}
```

> 耗时时间：87217ms

## 在批量插入的基础上使用多线程

```java

@Service
@Slf4j
public class MoreTestServiceImpl extends ServiceImpl<MoreTestMapper, MoreTestEntity> implements MoreTestService {

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Object doTest() throws InterruptedException {
        long start = System.currentTimeMillis();

        //手动创建线程池，注意你 数据库连接池的 允许连接数量，别超过了就行。
        ThreadPoolExecutor poolExecutor = new ThreadPoolExecutor(
                5,
                5,
                30,
                TimeUnit.SECONDS,
                new LinkedBlockingDeque<>(10),
                //isDaemon 设置线程是否是守护线程，true的话，主线程结束，new的线程就不会继续工作
                new NamedThreadFactory("执行线程", false),
                (r, executor) -> System.out.println("拒绝" + r));


        List<MoreTestEntity> entityList = new ArrayList<>();
        for (int i = 0; i < 5000; i++) {
            MoreTestEntity entity = new MoreTestEntity();
            entity.setId((long) i);
            entity.setA(UUID.randomUUID().toString());
            entity.setB(UUID.randomUUID().toString());
            entity.setC(UUID.randomUUID().toString());
            entity.setD(UUID.randomUUID().toString());
            entity.setE(UUID.randomUUID().toString());
            entity.setF(UUID.randomUUID().toString());
            entity.setG(UUID.randomUUID().toString());
            entity.setH(UUID.randomUUID().toString());
            entity.setI(UUID.randomUUID().toString());
            entity.setJ(UUID.randomUUID().toString());
            entity.setK(UUID.randomUUID().toString());
            entityList.add(entity);
        }

        //拆分list，将其拆分成5份，然后上面线程池创建也是5个核心线程，刚好执行
        List<List<MoreTestEntity>> partition = ListUtils.partition(entityList, 1000);
        //使用CountDownLatch保证所有线程都执行完成
        CountDownLatch latch = new CountDownLatch(5);
        partition.forEach(item -> {
            poolExecutor.execute(() -> {
                saveBatch(item, 1000);
                latch.countDown();
            });
        });
        latch.await();
        // 也可以这么写，设定超时时间
        //latch.await(100,TimeUnit.SECONDS);
        long end = System.currentTimeMillis();

        System.err.println(end - start);
        //关闭线程池
        poolExecutor.shutdown();
        return end - start;
    }
}
```

> 耗时时间： 28235
>
> 可见时间从180秒，缩短到了28秒，但是@Transactional对于多线程是控制不了所有的事务的。
>
> Spring实现事务的原理是通过ThreadLocal把数据库连接绑定到当前线程中，同一个事务中数据库操作使用同一个jdbc connection，新开启的线程获取不到当前jdbc connection。

**如下代码：**

```java
partition.forEach(item -> {
            poolExecutor.execute(() -> {
                saveBatch(item, 1000);
                latch.countDown();
                //让每个都报错
                int i = 1/0;
            });
        });
```

**控制台打印：**

```
Exception in thread "执行线程5" java.lang.ArithmeticException: / by zero
	at com.kusch.ares.service.impl.MoreTestServiceImpl.lambda$null$1(MoreTestServiceImpl.java:68)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:750)
Exception in thread "执行线程2" java.lang.ArithmeticException: / by zero
	at com.kusch.ares.service.impl.MoreTestServiceImpl.lambda$null$1(MoreTestServiceImpl.java:68)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:750)
Exception in thread "执行线程4" java.lang.ArithmeticException: / by zero
	at com.kusch.ares.service.impl.MoreTestServiceImpl.lambda$null$1(MoreTestServiceImpl.java:68)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:750)
Exception in thread "执行线程1" java.lang.ArithmeticException: / by zero
	at com.kusch.ares.service.impl.MoreTestServiceImpl.lambda$null$1(MoreTestServiceImpl.java:68)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:750)
Exception in thread "执行线程3" 30179
java.lang.ArithmeticException: / by zero
	at com.kusch.ares.service.impl.MoreTestServiceImpl.lambda$null$1(MoreTestServiceImpl.java:68)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:750)
```

可见5个线程都报错了，但是去查询数据库，却可以查询到5000条数据，这是不应该出现的情况。

## 处理多线程入库的事务问题

```java

@Service
@Slf4j
public class MoreTestServiceImpl extends ServiceImpl<MoreTestMapper, MoreTestEntity> implements MoreTestService {

    @Resource
    private DataSourceTransactionManager dataSourceTransactionManager;
    @Resource
    private TransactionDefinition transactionDefinition;

    @Override
    //此处手动管理事务的提交后，这个注解就可以去掉了
    //    @Transactional(rollbackFor = Exception.class)
    public Object doTest() {
        long start = System.currentTimeMillis();

        //手动创建线程池，注意你 数据库连接池的 允许连接数量，别超过了就行。
        ThreadPoolExecutor poolExecutor = new ThreadPoolExecutor(
                5,
                5,
                30,
                TimeUnit.SECONDS,
                new LinkedBlockingDeque<>(10),
                //isDaemon 设置线程是否是守护线程，true的话，主线程结束，new的线程就不会继续工作
                new NamedThreadFactory("执行线程", false),
                (r, executor) -> System.out.println("拒绝" + r));


        List<MoreTestEntity> entityList = new ArrayList<>();
        for (int i = 0; i < 50; i++) {
            MoreTestEntity entity = new MoreTestEntity();
            entity.setId((long) i);
            entity.setA(UUID.randomUUID().toString());
            entity.setB(UUID.randomUUID().toString());
            entity.setC(UUID.randomUUID().toString());
            entity.setD(UUID.randomUUID().toString());
            entity.setE(UUID.randomUUID().toString());
            entity.setF(UUID.randomUUID().toString());
            entity.setG(UUID.randomUUID().toString());
            entity.setH(UUID.randomUUID().toString());
            entity.setI(UUID.randomUUID().toString());
            entity.setJ(UUID.randomUUID().toString());
            entity.setK(UUID.randomUUID().toString());
            entityList.add(entity);
        }

        //拆分list，将其拆分成5份，然后上面线程池创建也是5个核心线程，刚好执行
        List<List<MoreTestEntity>> partition = ListUtils.partition(entityList, 10);
        //使用CountDownLatch保证所有线程都执行完成
        CountDownLatch sonLatch = new CountDownLatch(5);
        //主线程的 肯定为1
        CountDownLatch mainLatch = new CountDownLatch(1);
        AtomicBoolean hasError = new AtomicBoolean(false);
        partition.forEach(item -> {
            poolExecutor.execute(() -> {
                doSave(item, sonLatch, hasError, mainLatch);
            });
        });

        try {
            //此处应该是用try catch 包裹着主线程的所有业务代码，以此保证主线程中任何一处报错都可以通知子线程

            //这里加一个是为了调试主线程中的数据入库操作
            MoreTestEntity entity = new MoreTestEntity();
            entity.setId((long) 99999);
            entity.setA(UUID.randomUUID().toString());
            entity.setB(UUID.randomUUID().toString());
            entity.setC(UUID.randomUUID().toString());
            entity.setD(UUID.randomUUID().toString());
            entity.setE(UUID.randomUUID().toString());
            entity.setF(UUID.randomUUID().toString());
            entity.setG(UUID.randomUUID().toString());
            entity.setH(UUID.randomUUID().toString());
            entity.setI(UUID.randomUUID().toString());
            entity.setJ(UUID.randomUUID().toString());
            entity.setK(UUID.randomUUID().toString());
            save(entity);

            //主线程报错
            int i = 10 / 0;

            sonLatch.await();
        } catch (InterruptedException e) {
            hasError.set(true);
            e.printStackTrace();
        }

        mainLatch.countDown();

        long end = System.currentTimeMillis();

        System.err.println(end - start);
        //关闭线程池
        if (!poolExecutor.isShutdown()) {
            poolExecutor.shutdown();
        }
        return end - start;
    }

    /**
     * 包装后的子线程的保存代码
     *
     * @param entityList 要保存的集合
     * @param sonLatch   子线程 CountDownLatch
     * @param hasError   是否发生错误
     * @param mainLatch  主线程 CountDownLatch
     */
    private void doSave(List<MoreTestEntity> entityList,
                        CountDownLatch sonLatch,
                        AtomicBoolean hasError,
                        CountDownLatch mainLatch) {
        TransactionStatus transactionStatus = dataSourceTransactionManager.getTransaction(transactionDefinition);
        try {

            //            //子线程报错
            //            int i = 10 / 0;

            saveBatch(entityList);

        } catch (Throwable throwable) {
            throwable.printStackTrace();
            hasError.set(true);
        } finally {
            //这是必须的，每个子线程走完，要让主线程继续走，然后再回到子线程的每个任务，决定是提交还是回滚
            sonLatch.countDown();
        }
        try {
            //等待主线程的执行结束
            mainLatch.await();
        } catch (InterruptedException e) {
            e.printStackTrace();
            hasError.set(true);
        }

        //事务操作
        if (hasError.get()) {
            dataSourceTransactionManager.rollback(transactionStatus);
        } else {
            dataSourceTransactionManager.commit(transactionStatus);
        }

    }

}

```

> 分别放开子线程报错和主线程报错，会发现事务都可以正常回滚，达到了预期的效果。
>
> 主要思路就是通过`子线程CountDownLatch`和`主线程CountDownLatch`，控制线程好代码的执行顺序即可。

最后补充几点：

- 上述代码中的countDown()一旦出现不执行的情况那会导致线程堵塞堆积，所以建议给await()增加超时时间
- 这样操作可能还会出现问题，比如主线程通知子线程可以进行实务操作了，但是各个子线程之间非透明，所以还是有几率存在某个子线程事务回滚失败的情况。

