const fs=require('fs');

var content=fs.readFileSync("users.json");

var tbl=JSON.parse(content);

tbl.sort(function(a,b){

       var r= a.age-b.age;
         if(r==0){
             return(b.sex.charCodeAt(0)- a.sex.charCodeAt(0));
         }
         return r;
    });

var str = "<table id='tab'>"
str += tbl.map(function (a){
			return `
			<tr>
				<td>${a.name}</td>
				<td>${a.age}</td>
				<td>${a.sex}</td>
			</tr>
			`;
		}).reduce(function(a,b){
			return a+b;
		});
		str +="</table>";

var strs=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
	<table>${str}</table>
<script>
var tab=document.getElementById("tab");
var len=tab.tBodies[0].rows.length;
for(var i=0;i<len;i++){
    if(i%2==0){
        tab.tBodies[0].rows[i].style.backgroundColor="yellow";
    }
}
</script>
</body>
</html>
`;


fs.writeFile("users.html",strs,function (err){
});



