/**
 * 类型别名 type
 */
type Param1 = {
    methods:string,
    url:string,
    data?:any
}
enum State {
    Success = 200,
    Ready = 4
}
function getAJax(params:Param1) {
    let ajax = new XMLHttpRequest()
    ajax.open(params.methods,params.url)
    ajax.send(params.data)
    ajax.onreadystatechange = function() {
        if(ajax.status === State.Success && ajax.readyState === State.Ready) {
            console.log('成功了');
        }
    }
}







// type可以声明基础类型
type use1 = string
// type use1 = number    ------ 不能重复
// 也可以写成数组
type use2 = {
    name:string,
}
interface use3  {
    height:number,
    age:number,
    sex:boolean
}
// interface use4:string    ------  不能直接声明基础类型
// 声明类型不为 "void" 或 "any" 的函数必须返回值
function Inp(arr:use1):use1 {
    return arr.slice(0,2)
}
let use1Inp = Inp('zifuchuan')
console.log(use1Inp);








/**
 * 继承  （扩展接口）
 */
// type不可以继承，但是可以被继承
interface jic1 {
    name:string
}
type jic2 = string
type jic3 = {
    age:number,
    height:number
}
interface jic4 extends jic3 {
    sex:boolean
}
const usejic:jic4 = {
    sex:true,
    height:180,
    age:21
}
interface jic5 extends jic1 {
    sex:boolean
}
const usejic2:jic5 = {
    name:'libo',
    sex:true
}









/**
 * 接口定义函数类型，完整的写法
 */
let add1: (x: number, y: number) => number;
add1 = (arg1: number, arg2: number): number => arg1 + arg2;








/**
 * 使用接口定义函数
 */
interface Add2 {
    (x: number, y: number): number;
}
let add2:Add2 = (arg1: number, arg2: number): number => arg1 + arg2;








/**
 * 类型别名
 */
type Add3 = (x: number, y: number) => number;
let add3:Add3 = (arg1: number, arg2: number): number => arg1 + arg2;










/**
 * 可选参数（？）
 */
type Add4 = (x:number,y:number) => number
let add4:Add4 = (arg1:number,arg2:number):number => arg1 + arg2

type Add5 = (x:number,y?:number) => number

interface Add6 {
    x?:number,
    y:number
}