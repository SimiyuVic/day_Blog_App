import { Component } from "react";

class LifeCycleB extends Component {
    constructor(props) {
        console.log("Constructor in LifeCycleB")
        super(props);
        this.state = { 
            name: "Victor"
         }
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log("getDerivedStateFromProps in LifecyleB")
        return null
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate in LifeCycleB");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate in LifeCycleB");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate in LifeCycleB");
    }

    componentDidMount(){
        console.log("componentDidMount in LifeCycleB")
    }
    
    render() { 
        console.log("Render in LifeCycleB")
        return ( 
            <div>
                <h4>LifeCycle B</h4>
            </div>
         );
    }
}
 
export default LifeCycleB;