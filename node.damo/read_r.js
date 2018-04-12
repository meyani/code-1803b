
const fs=require('fs');
const path=require('path');
const json_path=path.resolve(__dirname ,'users.json');
const html_path=path.resolve(__dirname ,'users.html');

fs.readFile(json_path,function(err,data){
    if(err) throw err;
    var jso=JSON.parse(data);


     var tableStr=jso.map(function(a){
        return `<tr>
		<td>${a.name}</td>
		<td>${a.age}</td>
        <td>${a.sex}</td>
		</tr>`;
    }).reduce(function(a,b){
        return a+b;


    });







    var str=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
	<table id=tbl>${tableStr}</table>

<script>var tbl=document.getElementById('tbl');
         var trs=tbl.getElementsByTagName('tr');
         var cd=cc.tBodies[0].rows.length;
                for(var i=0;i<cd;i++){
                	if(i%2==0){
                        cc.tBodies[0].rows[i].style.backgroundColor="powderblue";
                    }else{
                        cc.tBodies[0].rows[i].style.backgroundColor="peachpuff";
                    }
                }
</script>

</body>
</html>
`;


    fs.writeFile(html_path,str,function(err2){
        if(err2) throw err2;
        console.log("写完了");

    })

});

//console.log(content.toString());





