function listaPaises(){"use strict";var a,e=document.getElementById("inputPais");["","Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia-Herzegovina","Botsuana","Brasil","Brunéi\tBandar","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Colombia","Comoras","Congo","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guinea","Guinea Ecuatorial","Guinea-Bisáu","Guyana","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kosovo","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Macedonia","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República Democrática del Congo","República Dominicana","Ruanda","Rumania","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudáfrica","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Taiwán","Tanzania","Tayikistán","Timor","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Vaticano","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"].forEach(i=>{(a=document.createElement("option")).setAttribute("value",i),a.innerHTML=i,e.appendChild(a)})}if(window.onload=function(){"use strict";listaPaises()},"true"==getCookie("login")){var form=document.getElementById("formComent");form.style.display="block"}function muestraComentario(){var a=document.getElementById("comentarios"),e=getCookie("sesion"),i=document.getElementById("caja").value,n=document.createElement("p"),o=document.createTextNode(e+": "+i);n.appendChild(o),a.insertBefore(n,a.childNodes[1])}function expandirFormulario(){var a=document.getElementById("inputPais").value,e=document.getElementById("inputDirec").value,i=document.getElementById("expandir").firstChild,n=document.getElementById("expandir");if(""!=a&&""!=e&&null==i){var o=document.createElement("input");o.setAttribute("type",Number),n.appendChild(o)}else""!=a&&""!=e||null==i||n.removeChild(n.childNodes[0])}document.getElementById("comentar").addEventListener("click",function(a){muestraComentario(),a.preventDefault()});var z=2;document.getElementById("contComent").innerHTML=z,$("#comentar").click(function(){z+=1,stop(z),document.getElementById("contComent").innerHTML=z});