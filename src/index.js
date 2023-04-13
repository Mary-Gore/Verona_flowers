import './css/style.css';
import getAndRenderProds from "./modules/getAndRenderProds";
import count from "./modules/count";
import addToCart from "./modules/addToCart";
import calcPrice from "./modules/calcPrice";
import toggleCartStatus from "./modules/toggleCartStatus";
import eventListeners from "./modules/eventListeners";
import popupAnimate from "./modules/popupAnimate";
import validateForm from "./modules/validateForm";
import sendForm from "./modules/sendForm";
import animateFinishPopup from "./modules/animateFinishPopup";

getAndRenderProds();
count();
addToCart();
calcPrice();
toggleCartStatus();
eventListeners();
//popupAnimate();
//animateFinishPopup();
validateForm();
sendForm('callback_form');
