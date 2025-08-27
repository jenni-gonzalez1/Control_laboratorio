export function nav() {
  let menu = document.createElement('div');
  menu.className = "menu";

  // Home
  let homeDiv = document.createElement('div');
  homeDiv.className = "menu-item";
  let homeImg = document.createElement('img');
  homeImg.src = "../../../Componentes/assets/home.png"; 
  homeImg.alt = "home";
  homeDiv.appendChild(homeImg);
  menu.appendChild(homeDiv);

  // Products
  let productsDiv = document.createElement('div');
  productsDiv.className = "menu-item";
  let productsImg = document.createElement('img');
  productsImg.src = "Componentes/assets/help.png";
  productsImg.alt = "products";
  productsDiv.appendChild(productsImg);
  menu.appendChild(productsDiv);

  // Help
  let helpDiv = document.createElement('div');
  helpDiv.className = "menu-item";
  let helpImg = document.createElement('img');
  helpImg.src = "Componentes/assets/cart.png";
  helpImg.alt = "help";
  helpDiv.appendChild(helpImg);
  menu.appendChild(helpDiv);

  // Cart
  let cartDiv = document.createElement('div');
  cartDiv.className = "menu-item";
  let cartImg = document.createElement('img');
  cartImg.src = "Componentes/assets/box.png";
  cartImg.alt = "cart";
  cartDiv.appendChild(cartImg);
  menu.appendChild(cartDiv);

  return menu;    
}