var Lista3 = [
  { NAME: "🍿REHÉN", URL: "https://player.okpeliz.com/embed/1371202" },
  { NAME: "🍿DESTINO FINAL 5", URL: "https://player.okpeliz.com/embed/55779" },
  { NAME: "🍿BORDERLANDS", URL: "https://player.okpeliz.com/embed/365177" }, 
  { NAME: "🍿EL MAGO DE OZ", URL: "https://player.okpeliz.com/embed/658224" },
  { NAME: "🍿OZ", URL: "https://player.okpeliz.com/embed/68728" },
  { NAME: "🍿BLANCA NIEVES Y EL CAZADOR", URL: "https://player.okpeliz.com/embed/58595" }, 
  { NAME: "🍿PIRATAS DEL CARIBE 5", URL: "https://player.okpeliz.com/embed/166426" },
  { NAME: "🍿VAN HELSING", URL: "https://player.okpeliz.com/embed/7131" }, 
  { NAME: "🍿CAPITANA MARVEL", URL: "https://player.okpeliz.com/embed/299537?alt=5347&referer=" },
  { NAME: "🍿CAPITAN AMERICA CIVIL WAR", URL: "https://player.okpeliz.com/embed/271110" }, 
  { NAME: "🍿IRON MAN 3", URL: "https://player.okpeliz.com/embed/68721" },
  { NAME: "🍿NO HABLES CON EXTRAÑOS", URL: "https://player.okpeliz.com/embed/1114513" },
  { NAME: "🍿NO TE MUEVAS", URL: "https://player.okpeliz.com/embed/1063877" }, 
  { NAME: "🍿THE WITCHER ANIMATION", URL: "https://player.okpeliz.com/embed/1203329" }, 
  { NAME: "🍿JUEGO DE TRONOS", URL: "https://lamovie.github.io/CONTENIDO/GAME%20OF%20THRONES.html" }, 
  { NAME: "🍿SCARY MOVIE 4", URL: "https://player.okpeliz.com/embed/4257" }, 
  { NAME: "🍿AZRAEL", URL: "https://lamovie.link/embed-088v1zqs1yu0.html" },
  { NAME: "🍿IRON MAN 2", URL: "https://lamovie.link/embed-yn6e1n7nots7.html" },
  { NAME: "🍿MALOS PADRES", URL: "https://lamovie.link/embed-xx5cm6q8lhr4.html" },
  { NAME: "🍿BAKI Vs KENGAN", URL: "https://lamovie.link/embed-y3jqmuqc2f1b.html" },
  { NAME: "🍿LA VIUDA NEGRA", URL: "https://lamovie.link/embed-mu7qoutr9wy4.html" },
  { NAME: "🍿MISIÓN IMPOSIBLE 6", URL: "https://lamovie.link/embed-70wua6dwdl5w.html" },
  { NAME: "🍿LA CAIDA DEL VUELO 811", URL: "https://lamovie.link/embed-dus822o2u8fm.html" },
  { NAME: "🍿CRIATURAS ASOMBROSAS", URL: "https://lamovie.link/embed-2zyxkofxb9vc.html" },
  { NAME: "🍿LA LIGA EXTRAORDINARIA", URL: "https://lamovie.link/embed-2x6jfl7ke0we.html" },
  { NAME: "🍿LA FUENTE DE LA JUVENTUD", URL: "https://lamovie.link/embed-x8ddf63skke4.html" },
  { NAME: "🍿LOS SIMPSON: SANTA HOMERO", URL: "https://lamovie.link/embed-4wr2dyyqomht.html" },
  { NAME: "🍿LOS SIMPSON: EN PLUSNIVERSARIO", URL: "https://lamovie.link/embed-g6hw1r7a27rn.html" },
  { NAME: "🍿LOS SIMPSON: EL BUENO, EL BART Y EL LOKI", URL: "https://lamovie.link/embed-mt1828un9umq.html" },  
  { NAME: "🍿TIERRA DE MAFIA", URL: "https://lamovie.github.io/CONTENIDO/TIERRA%20DE%20MAFIA.html" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }
]
   
// Selecciona la lista existente
var lista = document.getElementById("Lista");

// Agrega los nuevos elementos dinámicamente
Lista3.forEach(item => {
  var li = document.createElement("li");
  var a = document.createElement("a");

  a.href = item.URL || item.url;
  a.textContent = item.NAME || item.name;
  a.classList.add("Data");

  li.appendChild(a);
  lista.appendChild(li);
});

  
  
  
 
  
 
  
  
