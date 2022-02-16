import React from "react";
import '../../css/Counter.css';

interface State{
    counter: number
}
 
export default class CounterClass extends React.Component<{}, State>{

    constructor(props: any){
        super(props);
        this.state = {
            counter: 0
        };
    }

    render(){
        return (
            <div>
                <h4 className="h4class">Halaman Counter Class</h4>
                <p> {this.state.counter} </p>
                <button onClick={() => this.setState({counter: this.state.counter + 1})} className='increment'>Increment</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})} className='decrement'>Decrement</button>
            </div>
        );
    }
}

