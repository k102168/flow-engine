import React, { Component } from 'react';
import { Card, CardText, CardActions, Avatar, Input, Button} from 'react-toolbox';


class SingleRule extends Component {
    constructor(props){
        super(props);
        this.state= {
            expendCard: false,
            ruleValue: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.rule.id === nextProps.expendCard){
            this.setState({expendCard: !this.state.expendCard})
        }
    }
    
    expendCard = () =>{
        this.setState({expendCard: !this.state.expendCard})
    }

    handleChange = (value, event) =>{
        this.setState({[event.target.name]:value})
    }

    handleSubmit = () =>{
        switch(this.props.rule.body(this.state.ruleValue)) {
            case true:
                this.props.nextRule(this.props.rule.true_id)
                break;
            case false:
                this.props.nextRule(this.props.rule.false_id)
                break;
            default:
                null
        }
    }

    render() {
        let message = '';
        switch(this.props.rule.id){
            case 1:
                message = 'Input string length greater then 5 return ture else false'
                break;
            case 2:
                message = 'Input string lower case return ture else false'
                break;
            case 3:
                message = 'Input string upper case return ture else false'
                break;
            case 4:
                message = 'Input string what ever return null and next rule will also be null'
                break;
            default:
            null
        }
        return (
            <Card >
                <CardActions style={{justifyContent:"space-around"}}>
                    <h2>Rule {this.props.rule.id}</h2>
                    <Avatar icon='arrow_drop_down' onClick={this.expendCard}/>
                </CardActions>
                {this.state.expendCard?
                    <CardText>
                        <p><b>Input Hint: </b>{message}</p>
                        <Input 
                            label = 'Enter Rule Input'
                            name="ruleValue"
                            value ={this.state.ruleValue} 
                            onChange={this.handleChange}/>
                        <Button raised primary label='submit' onClick={this.handleSubmit}/>
                        <CardActions style={{justifyContent:'space-around'}}>
                            <p>Next rule id if passed: {this.props.rule.true_id}</p>
                            <p>Next rule id if failed: {this.props.rule.false_id}</p>
                        </CardActions>
                    </CardText>:
                    null
                }
            </Card>
        );
    }
}

export default SingleRule;