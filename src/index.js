import './css/style.css';
import getAndRenderProds from "./modules/getAndRenderProds";
import count from "./modules/count";
import addToCart from "./modules/addToCart";
import eventListeners from "./modules/eventListeners";
import popupAnimate from "./modules/popupAnimate";
import validateForm from "./modules/validateForm";
import sendForm from "./modules/sendForm";

getAndRenderProds();
count();
addToCart();
eventListeners();
popupAnimate();
validateForm();
sendForm('callback_form');
