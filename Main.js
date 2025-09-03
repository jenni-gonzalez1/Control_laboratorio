import { nav} from "./Componentes/nav/navComponent.js";
import {header} from "./Componentes/header/headerComponent.js";
import {seccion1} from "./Componentes/seccion1/seccionComponent.js";


function seccion (){

   let seccion = document.createElement('section');

   //localStorange
   let listaDeCompras = localStorage.getItem("carrito");
        
       if (!listaDeCompras) {
            listaDeCompras = [];
        } else {
            listaDeCompras = JSON.stringify(listaDeCompras);
        }
        
        console.log(listaDeCompras);
        
        //Header
   seccion.appendChild(header());



   seccion.appendChild(seccion1());


return seccion;

}

document.body.appendChild(seccion());  