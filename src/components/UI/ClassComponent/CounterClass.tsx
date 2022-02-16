import React from "react";
import '../../../styles/counter.css';
import { HeadingClassPage } from "../../elements/Heading/HeadingClassPage/HeadingClassPage";

interface State{
    counter: number
}
 
class CounterClass extends React.Component<{}, State>{

    constructor(props: any){
        super(props);
        this.state = {
            counter: 0,
        };
    }

    render(){
        return (
            <div>
                <HeadingClassPage />
                <p> {this.state.counter} </p>
                <button onClick={() => this.setState({counter: this.state.counter + 1})} className='increment'>Increment</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})} className='decrement'>Decrement</button>
            </div>
        );
    }
}

export {CounterClass};

