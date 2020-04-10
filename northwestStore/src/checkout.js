import './CSS/todo.css'
import React, { Component } from 'react'
import * as bs from 'react-bootstrap'
import $ from 'jquery'; 

class Checkout extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            auto_fb_post_mode: '',
            percent_acheived: '',
            goal: '',
            description: '',
            has_beneficiary: '',
            visible_in_search: '',
            campaign_hearts: '',
            is_charity: '',
            charity_valid: '',
            is_anonymous: '',
        }
    }
    handleFBChange = event => {
        this.setState({
            auto_fb_post_mode: event.target.value
        })
    }
    handleAchieveChange = event => {
        this.setState({
            percent_acheived: event.target.value
        })
    }
    handleGoalChange = event => {
        this.setState({
            goal: event.target.value
        })
    }
    handleHeartChange = event => {
        this.setState({
            campaign_hearts: event.target.value
        })
    }
    handleIsCharityChange = event => {
        this.setState({
            is_charity: event.target.value
        })
    }
    handleCharityValidChange = event => {
        this.setState({
            charity_valid: event.target.value
        })
    }
    handleIsAnonymousChange = event => {
        this.setState({
            is_anonymous: event.target.value
        })
    }
    handleHasBeneficiaryChange = event => {
        this.setState({
            has_beneficiary: event.target.value
        })
    }
    handleDescriptionChange = event => {
        this.setState({
            description: event.target.value
        })
    }
    handleVisibleInSearchChange = event => {
        this.setState({
            visible_in_search: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.auto_fb_post_mode} ${this.state.campaign_hearts} ${this.state.description}`)
        event.preventDefault()
    }


    render(){
        
        return (
            <form onSubmit={this.handleSubmit}>
                <bs.Container fluid>
                    <bs.Row>
                        <bs.Col>
                            <h1 className="mt-3">Checkout</h1>
                        </bs.Col>
                    </bs.Row>
                    <bs.Row className="my-3 mt-3">
                        <bs.Col md="3">
                        </bs.Col>
                        <bs.Col md="6">
                            <bs.Card>
                                <bs.Card.Body style={{marginLeft: "7rem"}} >
                                    <label>Auto facebook post most enabled</label><br />
                                    <select defaultValue="Select --" value={this.state.auto_fb_post_mode} onChange={this.handleFBChange}>
                                        <option defaultValue>Select --</option>
                                        <option value="1">True</option>
                                        <option value="0">False</option>
                                    </select><br />
                                    <label>Percent Achieved:</label><br /> <input type="text" placeholder="%" value={this.state.percent_acheived}onChange={this.handleAchieveChange}/><br />
                                    <label>Campaign Goal Amount :</label><br /> <input type="text" placeholder="$" value={this.state.goal} onChange={this.handleGoalChange}/><br />
                                    <label>How many campaign hearts?</label><br /> <input type="text" placeholder="#" value={this.state.campaign_hearts} onChange={this.handleHeartChange}/><br />
                                    <label>Is it for charity?</label><br />
                                    <select defaultValue="Select --" value={this.state.is_charity} onChange={this.handleIsCharityChange}>
                                        <option defaultValue>Select --</option>
                                        <option value="1">True</option>
                                        <option value="0">False</option>
                                    </select><br />
                                    <label>Is the charity validated?</label><br />
                                    <select defaultValue="Select --" value={this.state.charity_valid} onChange={this.handleCharityValidChange}>
                                        <option defaultValue>Select --</option>
                                        <option value="1">True</option>
                                        <option value="0">False</option>
                                    </select><br />
                                    <label>Is it anonymous?</label><br />
                                    <select defaultValue="Select --" value={this.state.is_anonymous} onChange={this.handleIsAnonymousChange}>
                                        <option defaultValue>Select --</option>
                                        <option value="1">True</option>
                                        <option value="0">False</option>
                                    </select><br />
                                    <label>Is it visible in the search?</label><br />
                                    <select defaultValue="Select --" value={this.state.visible_in_search} onChange={this.handleVisibleInSearchChange}>
                                        <option defaultValue>Select --</option>
                                        <option value="1">True</option>
                                        <option value="0">False</option>
                                    </select><br />
                                    <label>Has beneficiary?</label><br />
                                    <select defaultValue="Select --" value={this.state.has_beneficiary} onChange={this.handleHasBeneficiaryChange}>
                                        <option defaultValue>Select --</option>
                                        <option value="1">True</option>
                                        <option value="0">False</option>
                                    </select><br />
                                    <label>Write the description of your campaign below:</label><br />
                                    <textarea style={{width: "255px", height: "100px", borderRadius: "5px"}} value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
                                    <br /><br />
                                    <input type="submit" value="Submit" style={{marginLeft: "7rem"}}/>
                                </bs.Card.Body>
                            </bs.Card>
                        </bs.Col>
                        <bs.Col md="3">
                        </bs.Col>
                    </bs.Row>
                </bs.Container>
            </form>
        )
    }
    
}
export default Checkout


