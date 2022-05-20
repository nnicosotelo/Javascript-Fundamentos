// BOM
// browser object model

// navigator
const obtenerLocalizacion = function () {
    navigator.geolocation.getCurrentPosition(function (posicion) {
      console.log(posicion.coords.latitude, posicion.coords.longitude);
    });
  };
  
  // location
  
  location.reload();
  
  location.href = "https://google.com";
  
  location.replace("https://google.com");
  
  location.assign("https://google.com");
  
  // history
  history.go();
  history.go(-2);
  
  // funciones de tiempo
  
  // setTimeout
  // nos permite ejecutar funciones despues de transcurrido un cierto tiempo
  
  const redireccionar = function () {
    setTimeout(function () {
      console.log("holaaaaaaaaaaaa");
    }, 3000);
  };
  
  // setInterval
  // nos permite ejecutar acciones cada cierto tiempo
  
  // function contador(){
  //   let num =0;
  //   setInterval(function(){
  //     console.log(num++);
  //   },1000)
  // }
  
  // clearInterval
  // detener los intervalos
  
  const detenerIntervalo = function () {
    clearInterval(repetir);
  };
  