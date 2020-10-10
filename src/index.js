import QndReact from "./qnd-react";
import QndReactDom from "./qnd-react-dom";
import Counter from "./counter";

const Nav = ({ logo }) => <h1>{logo}</h1>;

const App = (
    <section>
        <Nav logo="My React" />
        <h1 className="primary">My React</h1>
        <p>My own version of React</p>
        <Counter />
    </section>
);

QndReactDom.render(App, document.getElementById("root"));
