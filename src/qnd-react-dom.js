import * as snabbdom from "snabbdom";
import eventListenersModule from "snabbdom/modules/eventlisteners";
import propsModule from "snabbdom/modules/props";
import QndReact from "./qnd-react";

const reconsile = snabbdom.init([propsModule, eventListenersModule]);

let rootVNode;

const render = (el, rootDomElement) => {
    !rootVNode && (rootVNode = rootDomElement);
    rootVNode = reconsile(rootVNode, el);
};

QndReact.__updater = (componentInstance) => {
    const oldNode = componentInstance.__vNode;
    const newVNode = componentInstance.render();
    componentInstance.__vNode = reconsile(oldNode, newVNode);
};

const QndReactDom = {
    render,
};

export default QndReactDom;
