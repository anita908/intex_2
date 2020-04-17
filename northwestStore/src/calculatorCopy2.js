import './CSS/todo.css'
import React, { Component } from 'react'
import * as bs from 'react-bootstrap'

class Calculator extends Component {

    constructor(props){
        super(props)
        this.state = {
            showMe: false,
            fiveStarRating: '',
            chainOwned: '',
            numberOfDialysisStations: '',
            offersInCenterHemodialysis: '',
            offersPeritonealDialysis: '',
            offersHomeHemodyalysis: '',
            patientTransfusionCategoryText: '',
            mortalityRate: '',
            percentageOfAdultPatientsWithLongTermCateterInUse: '',
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
      this.setState({
      showMe: true
      })
      let req = require("request");
      const uri = "https://ussouthcentral.services.azureml.net/workspaces/57c49b4f4be44691a572d4aa62e7fba4/services/5ad594d087f94cfab381b00270c3a2db/execute?api-version=2.0&details=true";
      const apiKey = "CWRlfLrYfwVD6Bb5Knt4Csn52ZBWxUWz0xCZf83UyfJRb7N5+etuUx4SNSehnIxwGbTVzpBD3LBzyUgapoaYag==";
      let data = {
        "Inputs": {
          "input1": {
            "ColumnNames": [
              "Rating",
              "Chain Owned?",
              "Number of Dyalysis Stations",
              "Offers in Center Hemodialysis?",
              "Offers Peritoneal Dialysis?",
              "Offers Home Hemodyalysis Training?",
              "Patient Transfusion Category",
              "Mortality Rate",
              "Percentage Of Adult Patients With Long Term Cateter In Use",
            ],
            "Values": [
              [
                this.state.fiveStarRating,
                this.state.chainOwned,
                this.state.numberOfDialysisStations,
                this.state.offersInCenterHemodialysis,
                this.state.offersPeritonealDialysis,
                this.state.offersHomeHemodyalysis,
                this.state.patientTransfusionCategoryText,
                this.state.mortalityRate,
                this.state.percentageOfAdultPatientsWithLongTermCateterInUse,
              ]
            ]
          }
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
          this.setState({
            response: body
            })
      });
      event.preventDefault()
    }


    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <bs.Container fluid>
                    <bs.Row>
                        <bs.Col>
                            <h1 className="mt-3">Prediction Calculator</h1>
                        </bs.Col>
                    </bs.Row>
                    <bs.Row className="my-3 mt-3">
                    <bs.Col md="6">
                            <bs.Card>
                                <bs.Card.Body style={{marginLeft: "7rem"}} >
                                    <label>Rating:</label><br />
                                    <select  value={this.state.fiveStarRating} onChange={this.handleFBChange}>
                                        <option defaultValue>Select --</option>
                                        <option>1 Star</option>
                                        <option>2 Stars</option>
                                        <option>3 Stars</option>
                                        <option>4 Stars</option>
                                        <option>5 Stars</option>
                                    </select><br />
                                    <label>Chain Owned?</label><br /> 
                                    <select value={this.state.chainOwned}onChange={this.handleAchieveChange}>
                                        <option defaultValue>Select --</option>
                                        <option value="1">True</option>
                                        <option value="0">False</option>
                                    </select>
                                    <label>Number of Dialysis Stations:</label><br /> <input type="text" placeholder="#" value={this.state.numberOfDialysisStations} onChange={this.handleGoalChange}/><br />
                                    <label>Offers In-Center Hemodialysis?</label><br /> 
                                    <select type="text" placeholder="#" value={this.state.offersInCenterHemodialysis} onChange={this.handleHeartChange}>
                                        <option defaultValue>Select --</option>
                                        <option value="1">True</option>
                                        <option value="0">False</option>
                                    </select>
                                    <label>Offers Peritoneal Dialysis?</label><br />
                                    <select  value={this.state.offersPeritonealDialysis} onChange={this.handleIsCharityChange}>
                                        <option defaultValue>Select --</option>
                                        <option value="1">True</option>
                                        <option value="0">False</option>
                                    </select><br />
                                    <label>Offers Home Hemodialysis Training?</label><br />
                                    <select  value={this.state.offersHomeHemodyalysis} onChange={this.handleCharityValidChange}>
                                        <option defaultValue>Select --</option>
                                        <option value="1">True</option>
                                        <option value="0">False</option>
                                    </select><br />
                                    <label>Patient Transfusion Category:</label><br />
                                    <input type="text" placeholder="Category Name" value={this.state.patientTransfusionCategoryText} onChange={this.handleIsAnonymousChange} /><br />
                                    <label>Mortality Rate:</label><br />
                                    <input type="text" placeholder="#" value={this.state.mortalityRate} onChange={this.handleVisibleInSearchChange} /><br />
                                    <label>Percentage of Adult Patients with Long-Term Catheter in use:</label><br />
                                    <input type="text" placeholder="%" value={this.state.percentageOfAdultPatientsWithLongTermCateterInUse} onChange={this.handleHasBeneficiaryChange} /><br />
                                    <br /><br />
                                    <input type="submit" value="Submit" style={{marginLeft: "7rem"}} onChange={this.handleSubmit}/>
                                    <br /><br />
                                </bs.Card.Body>
                            </bs.Card>
                        </bs.Col>
                        <bs.Col md="6">
                             {this.state.showMe?
                            <div>
                                {this.state.response}
                                </div>:null
                            }

                        </bs.Col>
                    </bs.Row>
                </bs.Container>
            </form>
        )
    }
    
}
export default Calculator


