import React, { Component } from 'react';
import { Card} from 'react-toolbox';
import SingleRule from './singleRule'


class Rule extends Component {
    constructor(props){
        super(props);
        this.state={
            rules:[
                {
                    id:1,
                    body: function(param){
                        // string length greater then 4 character
                        return param.length>4?true:false;
                    },
                    true_id: 2,
                    false_id: 4,
                },
                {
                    id:2,
                    body: function(param){
                        // string should be lower case
                        return param === param.toLowerCase()?true:false;
                    },
                    true_id: 4,
                    false_id: null,
                },
                {
                    id:3,
                    body: function(param){
                        // sting should be upper case
                        return param === param.toUpperCase()?true:false;
                    },
                    true_id: null,
                    false_id: 4,
                },
                {
                    id:4,
                    body:function(param){
                        return 1;
                    },
                    true_id:null,
                    false_id:null

                }
            ]
        }
    }

    nextRule = (value) =>{
        this.setState({expendCard:value})
    }

    render() {
        const rules =this.state.rules.map(rule=>{
            return (
                <SingleRule 
                    key= {rule.id} 
                    rule={rule} 
                    nextRule={this.nextRule.bind(this)} 
                    expendCard={this.state.expendCard}
                />
            );
        })

        return (
            <div style={{display: "flex"}}>
                <Card raised style={{justifyContent:"center"}}>
                    {rules}
                </Card>
            </div>
        );
    }
}

export default Rule;