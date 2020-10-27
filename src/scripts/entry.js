document.write("<div>Это говняха из ДИВа</div>");
document.write("<div>Это гонвяха из второго ДИВа</div>");
import { kaka } from "./kaka.js";
kaka();


import $ from "jquery";
//import { createPopper } from "@popperjs/core";
//import { createPopper } from "./../../node_modules/popper.js/dist/umd/popper-utils.js";
import { createPopper } from  "./../../node_modules/@popperjs/core/dist/umd/popper.js";
import Util from "./../../node_modules/bootstrap/js/dist/util.js";
import Tooltip from "./../../node_modules/bootstrap/js/dist/tooltip";
import Dropdown from "./../../node_modules/bootstrap/js/dist/dropdown";
import Carousel from "./../../node_modules/bootstrap/js/dist/carousel";


const btn1 = document.querySelector('#button');
const tooltip1 = document.querySelector('#tooltip');


$(function() {
  $('[data-toggle="tooltip"]').tooltip()
});

let murka = "murka";
let jopa = {
  jopa1: "laja",
  jopa2: "laja2",
  ar: {
    pole1: murka
  }
}
document.write(jopa.ar.pole1);