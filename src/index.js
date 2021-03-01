const domNodeCollection = require("./dom_node_collection");


function $l(arg) {
    if (arg instanceof HTMLElement) return new domNodeCollection([arg]);

}

window.$l();