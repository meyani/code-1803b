console.log("hello world");
 var str="";
 for(var i=1;i<10;i++){
     for(var j=1;j<=i;j++){
         str+=`${i}*${j}=${i*j}\t`;   // \t 制表符
        // console.log("%d*%d=%d",i,j,i*j);
     }
     str+="\n";//换行

 }
console.log(str);