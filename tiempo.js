clima = document.getElementById("clima")

clima.addEventListener('click',function(){
    obtenerDatos();
})

function obtenerDatos() {
    console.log("diste click");

    //al final de la url después del signo igual = poner la key provista por openweather
    
    let url ='http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,AR&lang=es&units=metric&appid=';

    // instancio peticion 
    const api = new XMLHttpRequest();
    // le paso el metodo 
    api.open('GET',url,true);
    api.send();


    api.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4){
            console.log(this.responseText);
            // vamos a poner el contenido del body en un json 

            let respuesta = JSON.parse(this.responseText)
            console.log(respuesta);
            clima = respuesta["weather"][0]["main"]// es un array de json, en la posicion 0 del array acceso a las filas
            descripcion=respuesta["weather"][0]["description"]
            temperatura =respuesta["main"]["temp"]
            sensacion_termica=respuesta["main"]["feels_like"]
            temperatura_minima = respuesta["main"]["temp_min"]
            temperatura_maxima = respuesta["main"]["temp_max"]
            humedad = respuesta["main"]["humidity"]
            nubes = respuesta["clouds"]["all"]
            presion = respuesta["main"]["pressure"]

            console.log(temperatura)
            console.log(clima)
            console.log(descripcion)
            console.log(sensacion_termica)
            console.log(temperatura_minima)
            console.log(temperatura_maxima)
            console.log(humedad)
            console.log( nubes)
            console.log(presion)

            let resultado2= document.getElementById("resultado2")
            resultado2.innerHTML = ""
            resultado2.innerHTML +='<li class="temp">'+Math.round(temperatura)+' °C</li>'
            resultado2.innerHTML +='<li class="desc">'+descripcion+'</li>'
            resultado2.innerHTML +='<hr>'
            resultado2.innerHTML +='<li class="data_extra">Sensación Térmica: <span class="sen_term">'+sensacion_termica+' °C</span></li>'
            resultado2.innerHTML +='<li class="data_extra">Nubes: '+nubes+'%</li>'
            resultado2.innerHTML +='<li class="data_extra">Humedad: '+humedad+'%</li>'
            resultado2.innerHTML +='<li class="data_extra">Presión: '+presion+'</li>'

            let cargarImg = document.getElementById("card2");
            if(descripcion == 'nubes') {
                cargarImg.style.backgroundColor = 'yellow';
            }
            if(descripcion == 'lluvia ligera') {
                cargarImg.innerHTML += '';
                cargarImg.innerHTML += '<img src="https://picsum.photos/id/41/1280/960" alt=""></img>';
            }

            if(descripcion == 'llovizna' || 'llovizna de gran intensidad') {
                cargarImg.style.backgroundColor = 'blue';
                cargarImg.classList.add('lluvia');
            }

            if(descripcion == 'llovizna ligera') {
                cargarImg.style.backgroundColor = 'yellow';
                cargarImg.innerHTML += '';
                cargarImg.innerHTML += '<img src="https://picsum.photos/id/41/1280/960" alt=""></img>';
            }

            if(descripcion == 'nubes dispersas') {
                cargarImg.style.backgroundColor = 'blue';
                cargarImg.classList.add('nubes_disp');
            }

            if(descripcion == 'cielo claro') {
                cargarImg.classList.add('cielo_claro');
            }

            if(descripcion == 'muy nuboso') {
                cargarImg.classList.add('muy_nuboso');
            }

        }
    }
}





/*
 -44.7964057
 -65.7153802
 */
