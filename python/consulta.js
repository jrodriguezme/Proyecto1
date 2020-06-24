function query(a,b){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML ="Procesando informacion";
      var rpta = JSON.parse(this.responseText);
      //var rpta=this.responseText;
      var html="";
      for(var i=0;i<rpta.length;i++){
        //console.log(a);
        if(a=="author"){
          //console.log(rpta[i].author);
          var str=String(rpta[i].author);
          //console.log(str);
          //console.log(str.indexOf(b));
          if(str.indexOf(b)!=(-1)){
            html=html+""+rpta[i].number+" \n"+rpta[i].author+" "+rpta[i].title+" "+rpta[i].editor+" "+rpta[i].year;
            console.log(html);
          }
        }
        if(a=="number"){
          var str=String(rpta[i].number);
          if(str.indexOf(b)!=(-1)){
            html=html+""+rpta[i].number+" "+rpta[i].author+" "+rpta[i].title+" "+rpta[i].editor+" "+rpta[i].year;
            console.log(html);
          }
        }
        if(a=="title"){
          var str=String(rpta[i].title);
          if(str.indexOf(b)!=(-1)){
            html=html+""+rpta[i].number+" "+rpta[i].author+" "+rpta[i].title+" "+rpta[i].editor+" "+rpta[i].year;
            console.log(html);
          }
        }
        if(a=="editor"){
          var str=String(rpta[i].editor);
          if(str.indexOf(b)!=(-1)){
            html=html+""+rpta[i].number+" "+rpta[i].author+" "+rpta[i].title+" "+rpta[i].editor+" "+rpta[i].year;
            console.log(html);
          }
        }
        if(a=="year"){
          var str=String(rpta[i].year);
          if(str.indexOf(b)!=(-1)){
            var htm=rpta[i];
            html=JSON.parse(htm);
            //html=html+""+rpta[i].number+"\n<br> "+rpta[i].author+"\n<br> "+rpta[i].title+"\n <br>"+rpta[i].editor+"\n <br>"+rpta[i].year;
            console.log(rpta[i]);
            document.getElementById("demo").innerHTML = html;
          }
        }
        //var autor=rpta[i].author;
      }
    }
    else{

    }
  };
  xhttp.open("GET", "cgi-bin/consulta.py", true);
  xhttp.send();
}
