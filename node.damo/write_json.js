
 var users=[
     {name:"张沙",age:8,sex:'男'},
     {name:"理事",age:13,sex:'女'},
     {name:"王五",age:30,sex:'女'},
     {name:"小明",age:21,sex:'男'},
     {name:"小李",age:45,sex:'男'},
     {name:"小红",age:45,sex:'女'},
 ];

const fs=require('fs');
 /*const path=require('path');

var temp=path.resolve(__dirname,'.','xixi','hehe','users.json');
 console.log(temp);             //一个点当前路径
*/


fs.writeFile(__dirname+'/s.json',JSON.stringify(users,null,4),//把数组转换成字符串
    function(err){
     if(err)
         console.error(err);
});


/*
 将users.json中的文件，读入到程序中，然后将该对象组装成一个表格
 写出到users.html文件 中，作为html文件，要求
 按照年龄由小到大排序
 按照年龄相同的女在前男在后
 要求实现隔行换色*/
