import { item } from "../modulos/item/productoModulo.js";
import { productos} from "../../dataBase/productos.js";
import { nav } from "../nav/navComponent.js";

export function seccion1(){

    let seccion = document.createElement('section');
    seccion.className = "seccion1";

    
    productos.forEach(element => {
        seccion.appendChild(item(
            
            element.title,
            element.image,
            element.price,
            element.description,
            element.category));
    });

    seccion.appendChild(nav());

    return seccion;
    

}