const fs=require('fs');
// 读文件   //
/*fs.readFile('shi.txt',function(err,data){
    console.log(data.toString());
});*/
//写文件
 /* fs.writeFile('shi.txt',`
  远近高低各不同
  `,function(err){

});*/

 //追加内容
 /*fs.writeFile('shi.txt',`
  这是我追加的内容
  `,{flag :'a'},function(err){

});*/
//异步
//同步
var content=fs.readFileSync('shi.txt');
console.log(content.toString());
console.log("script over");




console.log(__dirname);//脚本所在的目录
console.log(__filename);//脚本的文件全路径