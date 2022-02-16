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
                <p> a {this.state.counter} </p>
                <button onClick={() => this.setState({counter: this.state.counter + 1})} className='increment'>Increment</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})} className='decrement'>Decrement</button>
        </div>
        );
    }
}

