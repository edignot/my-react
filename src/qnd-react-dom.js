import * as snabbdom from "snabbdom";
import propsModule from "snabbdom/modules/props";

const reconsile = snabbdom.init([propsModule]);

const render = (el, rootDomElement) => {
    reconsile(rootDomElement, el);
};

const QndReactDom = {
    render,
};

export default QndReactDom;
