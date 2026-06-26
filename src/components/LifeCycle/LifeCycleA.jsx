import { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {

    constructor(props) {
        console.log("Constructor in LifeCycleA");

        super(props);

        this.state = {
            name: "Victor"
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps in LifeCycleA");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount in LifeCycleA");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate in LifeCycleA");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate in LifeCycleA");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate in LifeCycleA");
    }

    changeState = () => {
        this.setState({
            name: "James"
        });
    };

    render() {
        console.log("Render in LifeCycleA");

        return (
            <div>
                <h2>{this.state.name}</h2>

                <h4>LifeCycle A</h4>

                <button onClick={this.changeState}>
                    Change Name
                </button>

                <LifeCycleB />
            </div>
        );
    }
}

export default LifeCycleA;