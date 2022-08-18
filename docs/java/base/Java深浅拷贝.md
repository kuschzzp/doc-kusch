# 深拷贝和浅拷贝


## 浅拷贝（重写clone方法）

- 说明：浅拷贝就是拷贝给另一个对象的是本对象存储的地址，而不是新开辟的存储区域去存放新的这个对象，这样不管是修改原对象还是新对象的内容，都会将原对象和新对象的内容修改掉。

### 第一步：新建Age类
```java
/**
 * @description: 构造引用类型变量
 **/
public class Age {
    private int age;

    //构造方法
    public Age(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String toString() {
        return this.age + "";
    }
}
```
### 第二步：新建DisabledPerson类
```java
/**
 * @description: 浅拷贝
 **/
public class DisabledPerson implements Cloneable {

    /**
     * 特殊的：String类型属于引用数据类型，不属于基本数据类型，但是String类型的数据是存放在常量池中的，也就是无法修改的！
     * 但是从kusch修改成爷爷之后，是将这个引用指向了一个新的常量爷爷，并没有修改原来引用。
     */
    private String categoryType;

    /**
     * 基本数据类型是值传递，所以修改值后不会影响另一个对象的该属性值
     */
    private int length;
    /**
     * 引用数据类型是地址传递（引用传递），所以修改值后另一个对象的该属性值会同步被修改。
     */
    private Age age;


    //浅拷贝，clone对象均指向同一个，修改clone对象也会影响原始对象
    @Override
    public Object clone() throws CloneNotSupportedException {
        //直接写super.clone()的都是浅拷贝！
        return super.clone();
    }

    public DisabledPerson() {
        System.out.println("DisabledPerson 的 无参构造>>>>>>>>>>>>>>>");
    }

    public DisabledPerson(String categoryType, int length, Age age) {
        System.out.println("DisabledPerson 的 全参构造>>>>>>>>>>>>>>>");
        this.categoryType = categoryType;
        this.length = length;
        this.age = age;
    }

    @Override
    public String toString() {
        return this.categoryType + "----" + this.age + "----" + this.length;
    }

    public String getCategoryType() {
        return categoryType;
    }

    public void setCategoryType(String categoryType) {
        this.categoryType = categoryType;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public Age getAge() {
        return age;
    }

    public void setAge(Age age) {
        this.age = age;
    }
}
```

### 第三步：运行测试

```java
public static void main(String[] args) throws CloneNotSupportedException {
        //原始对象
        Age age = new Age(20);
        DisabledPerson person = new DisabledPerson("kusch", 10, age);
        //通过调用重写后的clone方法进行浅拷贝
        DisabledPerson clone1 = (DisabledPerson) person.clone();
        System.out.println("原始对象："+ person.toString());
        System.out.println("浅拷贝对象："+ clone1.toString());
        //尝试修改原始对象的值，看看浅拷贝对象里面的是否改变
        person.setCategoryType("爷爷");
        age.setAge(8888888);//修改引用对象Age
        person.setLength(100);
        System.out.println("操作修改后原始对象："+ person.toString());
        System.out.println("未操作的浅拷贝对象："+ clone1.toString());
    }
```

输出：
::: tip 提示
输出的解释请查看DisabledPerson类上的注释！
:::
```
DisabledPerson 的 全参构造>>>>>>>>>>>>>>>
原始对象：kusch----20----10
浅拷贝对象：kusch----20----10
操作修改后原始对象：爷爷----8888888----100
未操作的浅拷贝对象：kusch----8888888----10
```

## 深拷贝（重写clone方法）

- 说明：深拷贝：全部拷贝原对象的内容，包括内存的引用类型也进行拷贝。（每一层的每个对象都进行浅拷贝=深拷贝）

### 第一步：修改Age类

```java
public class Age implements Cloneable {
    private int age;

    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    //构造方法
    public Age(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String toString() {
        return this.age + "";
    }
}
```
### 第二步：修改DisabledPerson类

```java
public class DisabledPerson implements Cloneable {

    private String categoryType;
    private int length;
    private Age age;

    //深拷贝 clone会产生新的对象，修改克隆对象不会对原始对象产生影响
    @Override
    public Object clone() throws CloneNotSupportedException {
        DisabledPerson disabledPerson = null;
        disabledPerson = (DisabledPerson) super.clone(); 
        disabledPerson.age = (Age) disabledPerson.getAge().clone(); //浅拷贝引用对象Age，每一层的每个对象都进行浅拷贝=深拷贝
        return disabledPerson;
    }

    public DisabledPerson() {
        System.out.println("DisabledPerson 的 无参构造>>>>>>>>>>>>>>>");
    }

    public DisabledPerson(String categoryType, int length, Age age) {
        System.out.println("DisabledPerson 的 全参构造>>>>>>>>>>>>>>>");
        this.categoryType = categoryType;
        this.length = length;
        this.age = age;
    }

    @Override
    public String toString() {
        return this.categoryType + "----" + this.age + "----" + this.length;
    }

    public String getCategoryType() {
        return categoryType;
    }

    public void setCategoryType(String categoryType) {
        this.categoryType = categoryType;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public Age getAge() {
        return age;
    }

    public void setAge(Age age) {
        this.age = age;
    }
}

```

### 第三步：运行测试

- 还是上面的测试类

- 输出结果

```
DisabledPerson 的 全参构造>>>>>>>>>>>>>>>
原始对象：kusch----20----10
深拷贝对象：kusch----20----10
操作修改后原始对象：爷爷----8888888----100
未操作的深拷贝对象：kusch----20----10
```
> 可见，进行了深拷贝之后，无论是什么类型的属性值的修改，都不会影响另一个对象的属性值。


## 深拷贝优化（对象序列化实现）

- 层次调用clone方法可以实现深拷贝，但是代码量实在太大。特别对于属性数量比较多、层次比较深的类而言，每个类都要重写clone方法太过繁琐。

### 第一步：不实现Cloneable接口

- 去掉Age类和DisabledPerson类中实现的Cloneable接口，以及重写的clone方法。
- 将两个类实现序列化接口`implements Serializable`

### 第二步：Main方法进行测试

```java
public static void main(String[] args) throws ClassNotFoundException, IOException {
        //原始对象
        Age age = new Age(20);
        DisabledPerson person = new DisabledPerson("kusch", 10, age);
        //通过序列化方法实现深拷贝
        // 写入字节流
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ObjectOutputStream objectOutputStream = new ObjectOutputStream(outputStream);
        objectOutputStream.writeObject(person);
        objectOutputStream.flush();
        // 分配内存，写入原始对象，生成新对象
        ObjectInput objectInput = new ObjectInputStream(new ByteArrayInputStream(outputStream.toByteArray()));
        DisabledPerson clone1 = (DisabledPerson) objectInput.readObject();

        System.out.println("原始对象："+ person.toString());
        System.out.println("序列化深拷贝对象："+ clone1.toString());
        //尝试修改原始对象的值，看看浅拷贝对象里面的是否改变
        person.setCategoryType("爷爷");
        age.setAge(8888888);//修改引用对象Age
        person.setLength(100);
        System.out.println("操作修改后原始对象："+ person.toString());
        System.out.println("未操作的序列化深拷贝对象："+ clone1.toString());

        //操作流  就别忘了关
        outputStream.close();
        objectOutputStream.close();
        objectInput.close();
    }
```

- 输出结果

```
DisabledPerson 的 全参构造>>>>>>>>>>>>>>>
原始对象：kusch----20----10
序列化深拷贝对象：kusch----20----10
操作修改后原始对象：爷爷----8888888----100
未操作的序列化深拷贝对象：kusch----20----10
```

可见，深拷贝成功！