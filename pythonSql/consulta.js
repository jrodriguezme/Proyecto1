function query(a,b){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var rpta = JSON.parse(this.responseText);
      //var rpta=this.responseText;
      var html="";
      //Casting=MOvieID ACTorID ordinal
      //Actor=ActorID name
      //Movie= MOvieID title year score votes 
      switch(a){
        case "Actor":
          var Actores=rpta.Actor;
          for (i in Actores){
            var temp=Actores[i];
            var temp2=String(temp[1]);
            if(temp2.indexOf(b)>=0){
              var ActorID=Number(temp[0]);
              html=html+"<br><B>"+imprimirDatos(0,ActorID,rpta)+"</B>";
              //console.log(html);
              document.getElementById("demo").innerHTML =html;
            }
          }
          break;
        case "ActorID":
          //console.log(porActorID(b,rpta));
          if(porActorID(b,rpta)=="no"){
            document.getElementById("demo").innerHTML ="no se encontro el ID del Actor";
          }
          else{
            html=html+"<br><B>"+imprimirDatos(0,b,rpta)+"</B>";
            document.getElementById("demo").innerHTML =html;
          }
          break;
        case "Movie":
          var Movies=rpta.Movie;
          for (i in Movies){
            var temp=Movies[i];
            var temp2=String(temp[1]);
            if(temp2.indexOf(b)>=0){
              var MovieID=Number(temp[0]);
              html=html+"<br><B>"+imprimirDatos(1,MovieID,rpta)+"</B>";
              console.log(html);
              document.getElementById("demo").innerHTML =html;
            }
          }
          break;
        case "MovieID":
          if(porMovieID(b,rpta)=="no"){
            document.getElementById("demo").innerHTML ="no se encontro el ID del Movie";
          }
          else{
            html=html+"<br><B>"+imprimirDatos(1,b,rpta)+"</B>";
            document.getElementById("demo").innerHTML =html;
          }
          break;
        case "Año":
          var Movies=rpta.Movie;
          for (i in Movies){
            var temp=Movies[i];
            var temp2=Number(temp[2]);
            if(temp2==b){
              var MovieID=Number(temp[0]);
              html=html+"<br><B>"+imprimirDatos(1,MovieID,rpta)+"</B>";
              console.log(html);
              document.getElementById("demo").innerHTML =html;
            }
          }
          break;
        case "Rank":
          var Movies=rpta.Movie;
          for(i in Movies){
            var temp=Movies[i]
            html=html+"<br><B> Title: "+temp[1]+" Year: "+temp[2]+" Score: "+temp[3]+" Votes: "+temp[4]+"</B>";
            //console.log(temp2);
          }
          document.getElementById("demo").innerHTML =html;
          break;
        case "Casting":
          break;
        default:
          break;
      }
    }  
  };
  xhttp.open("GET", "cgi-bin/consulta.py", true);
  xhttp.send();
}
function impreso(){
  return "<br><b>hola impreso </b>";
}
function imprimirDatos(cod,id,rpta){
  var html="";
  switch(cod){
    case 0:
      var pro=0;
      var castines=rpta.Casting;
      for(i in castines){
        var temp=castines[i];
        var temp2=Number(temp[1]);
        if(temp2==id){
          if(porActorID(id,rpta)!="no"){
            html=html+porActorID(id,rpta);
            html=html+porMovieID(temp[0],rpta)+"<br>";
            pro=1;
          }
        }
      }
      if(pro==1) {
        return html;
      }
      else{
        return "no";
      }
      break;
    case 1:
      var pro=0;
      var castines=rpta.Casting;
      for(i in castines){
        var temp=castines[i];
        var temp2=Number(temp[0]);
        if(temp2==id){
          if(porMovieID(id,rpta)!="no"){
            html=html+porActorID(temp[1],rpta);
            html=html+porMovieID(id,rpta)+"<br>";
            pro=1;
          }
        }
      }
      if(pro==1){
        return html;
      }
      else{
        return "no";
      }
      break;
    default:
      break;
  }
}
function porActor(actor,rpta){
  if(actor=="Actor"){
    var Actores=rpta.Actor;
    for (i in Actores){
      var temp=Actores[i];
      var temp2=String(temp[1]);
      if(temp2.indexOf(b)>=0){
        var ActorID=Number(temp[0]);
        console.log(ActorID);
        console.log(Actores[i]);
      }
    }
  }
}
function porActorID(id,rpta){
  var Actores=rpta.Actor;
  var html="";
  var conf=0;
  for (i in Actores){
    var temp=Actores[i];
    var temp2=Number(temp[0]);
    if(temp2==id){
      html=html+"<br><B>Actor: "+temp[1]+"</B>";
      conf=1;
    }
  }
  if(conf==0){
    return "no";
  }
  else{
    return html;
  }
}
function porTitle(){
  var movies=rpta.Movie;
  var html="";
  for (i in movies){
    var temp=movies[i];
    var temp2=String(temp[1]);
    if(temp2==id){
      html=html+"<br><B> Title: "+temp[1]+" Year: "+temp[2]+" Score: "+temp[3]+" Votes: "+temp[4]+"</B>";
      return html;
    }
  }
}
function porMovieID(id,rpta){
  var Movies=rpta.Movie;
  var html="";
  var conf=0;
  for (i in Movies){
    var temp=Movies[i];
    var temp2=Number(temp[0]);
    if(temp2==id){
      html=html+"<br><B> Title: "+temp[1]+" Year: "+temp[2]+" Score: "+temp[3]+" Votes: "+temp[4]+"</B>";
      conf=1;
    }
  }
  if(conf==0){
    return "no";
  }
  else{
    return html;
  }
}
