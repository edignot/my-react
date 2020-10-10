import QndReact from "./qnd-react";
import QndReactDom from "./qnd-react-dom";

const App = (
    <section>
        <h1 className="primary">My React</h1>
        <p>My own version of React</p>
    </section>
);

QndReactDom.render(App, document.getElementById("root"));
