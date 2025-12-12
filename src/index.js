import { products } from "./data/data.js"; 
import template from "./data/data-template.hbs"; 

const list = document.querySelector(".js-list");

list.innerHTML = template({ products });        