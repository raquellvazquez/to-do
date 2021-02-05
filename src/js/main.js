import {test} from './agregarTarea.js';
import {eliminar} from './eliminarTarea.js';

let input = document.createElement("input");
input.setAttribute("id", "input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Agrega una nueva tarea");

document.getElementById("app").appendChild(input);