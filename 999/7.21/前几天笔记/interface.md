**interface**

​	定义函数需要传的参数较多的时候，可以用到interface



**可选属性**

​	格式：属性名 ?：类型

​	那么这个参数就可传可不传



**多余属性**

​	格式：[prop：string]：any



**多余属性检查**

​	如果没有这个属性就会报错没有这个属性



**绕开多余属性检查**

​	1）使用类型断言 as <>

​	2）使用多余属性 [prop：string]：any

​	3）利用类型兼容性



**只读属性**（readonly）

​	1）使用const修改常量里的属性会报错

​	2）使用const定义一个对象，修改对象里面属性不会报错，如果需要对象里的属性不可以修改，就使用readonly



**函数类型**

​	1）接口能描述普通对象，也可以描述函数类型

​	2）定义函数的时候，名字可以和接口中参数中的额名可以不相同，但位置要一致