import React from 'react';


class Form extends React.Component{
    constructor(props){
        super(props);
        //bind the specific instance of onchange from this particular class to the onchange method
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        //default form state
        this.state = {
            value: 'A placeholder'

        }
    }

    onChange(event){
        this.setState({
            value: event.target.value
        });
    }

    onSubmit(){
        this.props.submitAction(this.state);
    }
    
    render(){
        return(
            <div>
            <input type="text" onChange={this.onChange} value={this.state.value}/>
            <button onClick={this.onSubmit}>Submit</button>
            
            </div>
        )
    }
}
export default Form;