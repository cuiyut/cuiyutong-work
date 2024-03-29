/**
 * 获取ul
 */
var ul = document.getElementsByTagName('ul')[0];
/**
 * 按钮们
 */
// var allren = document.getElementById('allren');
// let yiwc:HTMLElement|null = document.getElementById('yiwc')
// let weiwc:HTMLElement|null = document.getElementById('weiwc')
// let qing:HTMLElement|null = document.getElementById('qing')
/**
 * 新添加的数组
 */
var todoArray = [];
/**
 * id递增
 */
var nextId = 1;
/**
 * 新添加的内容
 */
//     '//@ts-ignore' 隐藏文件中的报错
function addTodo(event) {
    if (!event || event.keyCode === 13) {
        // @ts-ignore
        var inputValue = document.getElementsByClassName('input')[0].value;
        if (inputValue) {
            oneId(inputValue);
            // @ts-ignore
            document.getElementsByClassName('input')[0].value = '';
        }
    }
}
/**
 * id唯一
 */
function oneId(inputValue) {
    if (todoArray.length > 0) {
        nextId++;
    }
    var addItem = {
        checked: false,
        id: nextId,
        value: inputValue
    };
    todoArray.push(addItem);
    load(todoArray);
}
/**
 * 渲染html
 */
function load(data, checkedId) {
    ul.innerHTML = '';
    data.forEach(function (item) {
        var li = document.createElement('li');
        if (item.checked) {
            li.className = 'isXuan';
        }
        else {
            li.className = '';
        }
        li.id = "".concat(item.id);
        // --------
        // if(item.id == checkedId && item.checked) {}
        li.innerHTML = "\n        <input type='checkbox' class='fu' id=".concat(item.id, " ").concat(item.checked ? 'checked' : null, " onchange='isCheck(this)' />\n        <span>").concat(item.value, "</span>\n        <button class='del' id=").concat(item.id, " onclick=del(this)>X</button>\n        ");
        ul.append(li);
    });
}
/**
 * 删除
 */
function del(ele) {
    todoArray = todoArray.filter(function (item) { return item.id != ele.id; });
    load(todoArray);
}
/**
 * 切换选中数据
 */
function isCheck(ele) {
    todoArray.forEach(function (item) {
        if (item.id == ele.id) {
            item.checked = !item.checked;
        }
    });
    load(todoArray, ele.id);
}
/**
 * 清空
 */
function qingAll() {
    todoArray = [];
    ul.innerHTML = '';
}
/**
 * 未完成
 */
function weiwcheng() {
    var weiwc = todoArray.filter(function (item) { return !item.checked; });
    load(weiwc);
}
/**
 * 已完成
 */
function yiwcheng() {
    var wan = todoArray.filter(function (item) { return item.checked; });
    load(wan);
}
/**
 * 所有
 */
function dall() {
    load(todoArray);
}
