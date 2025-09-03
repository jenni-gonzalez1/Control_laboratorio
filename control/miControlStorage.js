const CARRITO = 'carrito';

function guardarProducto(producto) {
localStorage.setItem(LOCAL_STORAGE_KEY_ASSIGNMENTS, JSON.stringify(producto));
}

function obtenerProductos() {
return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_ASSIGNMENTS)) || [];
}

export {CARRITO, guardarProducto, obtenerProductos };