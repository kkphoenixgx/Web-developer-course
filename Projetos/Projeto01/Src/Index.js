import {default as Controller} from "./controller/ControllerIndex.js"

let headerElement = document.querySelector("header")
let Page = headerElement.dataset.file
window.site = new Controller(Page);
