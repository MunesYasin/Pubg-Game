var name =prompt("Whats your name")
if (name == ""){
alert("Wlecom ")}
else if (name =="null"){
  alert("Welcom Man")}
  else {
    alert("Welcom "+name)
  }

  
console.log(name)


var map=prompt("Whats your favourit map (Sanhok,Erangle,Miramar) ")
    
     while(map != "Sanhok" && map!= "Miramar" &&map!= "Erangle"){
     
      var map=prompt("PLz choose one of mentioned map (Sanhok ,Erangle,Miramar")}
      
    
    console.log(map)
      
      var time = prompt("how many time you want to view it ?Max : 5 time")
      while(time >= 5 || time <= 0){
  var time = prompt("Plz choose bitwen 0 and 5")}

 
  for (var i=0 ; i<time;i++){
    if (map == "Sanhok"){
    document.write("<div>"+"<h3>"+map+"</div>"+"</h3>"+" <img src='https://1.bp.blogspot.com/-F_7FxPMlV_M/YEWTMh6L64I/AAAAAAAABQY/KToJ9Tf3RDcUFHtv4-z_jRJe-ZD1_zSuACLcBGAsYHQ/w640-h308/%25D8%25B3%25D8%25A7%25D9%2586%25D9%2587%25D9%2588%25D9%2583.png' alt='Sanhok'" )}

else if (map == "Erangle"){
    document.write("<div>"+"<h3>"+map+"</div>"+"</h3>"+" <img src='https://1.bp.blogspot.com/-sepocUunIHU/YEWRscwrigI/AAAAAAAABQQ/ZPJheFA3knIJbTjgKSBK0VuXwyB7d-A_wCLcBGAsYHQ/s1350/%25D8%25A7%25D9%258A%25D8%25B1%25D9%2586%25D8%25AC%25D9%2584.png' alt='Erangle' ")}


else {
    document.write("<div>"+"<h3>"+map+"</div>"+"</h3>"+" <img src='https://1.bp.blogspot.com/-QUIOR1MwmQw/YEWT3sF7hjI/AAAAAAAABQg/Ie47uI0jvgsBCmHTy08NDQ1N1v9_nz3jQCLcBGAsYHQ/s1350/%25D9%2585%25D9%258A%25D8%25B1%25D8%25A7%25D9%2585%25D8%25A7%25D8%25B1.png' alt='Miramar'")}



  }



