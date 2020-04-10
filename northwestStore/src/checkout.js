import './CSS/todo.css'
import React, { Component } from 'react'
import * as bs from 'react-bootstrap'

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
            output: '',
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
      let req = require("request");
      const uri = "https://cors-anywhere.herokuapp.com/https://ussouthcentral.services.azureml.net/workspaces/57c49b4f4be44691a572d4aa62e7fba4/services/46efc5630b2e430c92e2f09ab66f8f29/execute?api-version=2.0&details=true";
      const apiKey = "cEefYo5ewyLSkbbVPxjAKht49/R3QtyeOk1J2drYvQM8EJMZVcOARxHyDgaAMkBj8qqRYD+pAPDfPF+T98HN9w==";
      let data = {
          "Inputs": {
              "input1":
              [
                  {
                      'auto_fb_post_mode': this.state.auto_fb_post_mode,
                      'percent_acheived': this.state.percent_acheived,
                      'goal': this.state.goal,
                      'description': this.state.description,
                      'has_beneficiary': this.state.has_beneficiary,
                      'visible_in_search': this.state.visible_in_search,
                      'campaign_hearts': this.state.campaign_hearts,
                      'is_charity': this.state.is_charity,
                      'charity_valid': this.state.charity_valid,
                      'is_anonymous': this.state.is_anonymous,
                  }
              ],
          },
          "GlobalParameters": {}
      }
      const options = {
          uri: uri,
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + apiKey,
          },
          body: JSON.stringify(data)
      }
      req(options, (err, res, body) => {
          if (!err && res.statusCode == 200) {
              console.log(body);
          } else {
              console.log("The request failed with status code: " + res.statusCode);
          }
      });
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
                                    <input type="submit" value="Submit" style={{marginLeft: "7rem"}} onChange={this.handleSubmit}/>
                                    <br /><br />
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


