import QndReact from "./qnd-react";

export default class Counter extends QndReact.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
        console.log("component mounted");
    }

    render() {
        return (
            <section>
                <p>Count: {this.state.count}</p>
                <button
                    onClick={() =>
                        this.setState({ count: this.state.count + 1 })
                    }
                >
                    +
                </button>
            </section>
        );
    }
}
