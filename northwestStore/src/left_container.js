import React from 'react'
import * as bs from 'react-bootstrap'
import AppContext from './context'
import { Link } from 'react-router-dom';
// const scaryAnimals = [
//   { label: "Alligators", value: 1 },
//   { label: "Crocodiles", value: 2 },
//   { label: "Sharks", value: 3 },
//   { label: "Small crocodiles", value: 4 },
//   { label: "Smallest crocodiles", value: 5 },
//   { label: "Snakes", value: 6 },
// ];


function Left_container(props) {
  const context = React.useContext(AppContext)
  // const CampaignList = Object.entries(context.campaigns)
  const NAME_AR = Object.values(context.campaigns)

  // let count = 0
  let rows =[]
  for (const p of NAME_AR) {
    // if (match === null){
      rows.push(p)
    // }
  }

  return (
    <>
      Click to apply filters:
      <br/>
      <br/>
      <Link to={`/campaign`}>
        <bs.Button
          onClick = {evt => {
          Object.values(context.campaigns).map((cam) => (          
              (rows = rows.filter(function(Donators){
                      return Donators.donators > 50}))
          ))
          context.count = 0
          context.campaigns = rows

          }}>Over 50 Donors
        </bs.Button>
      </Link>
      <br/>
      <br/>
      <Link to={`/campaign`}>
        <bs.Button
          onClick = {evt => {
            Object.values(context.campaigns).map((cam) => (          
                  (rows = rows.filter(function(Donators){
                      return Donators.current_amount > 5000}))
          ))
          context.campaigns = rows
          }}>Donations > $5,000
        </bs.Button>
      </Link>
      <br/>
      <br/>
      <Link to={`/campaign`}>
        <bs.Button
          onClick = {evt => {
            Object.values(context.campaigns).map((cam) => (          
                  (rows = rows.filter(function(Donators){
                      return Donators.social_share_total > 500}))
          ))
          context.campaigns = rows
          }}>Share Count > 500
        </bs.Button>
      </Link>
      <br/>
      <br/>
      <Link to={`/campaign`}>
        <bs.Button
          onClick = {evt => {
            Object.values(context.campaigns).map((cam) => (          
                  (rows = rows.filter(function(Donators){
                      return Donators.campaign_hearts > 200}))
          ))
          context.campaigns = rows
          }}>Hearts > 200
        </bs.Button>
      </Link>
      <br/>
      <br/>
      <Link to={`/campaign`}>
        <bs.Button
          onClick = {evt => {
            Object.values(context.campaigns).map((cam) => (          
                  (rows = rows.filter(function(Donators){
                      return Donators.days_active > 5}))
          ))
          context.campaigns = rows
          }}>Days Active > 5
        </bs.Button>
      </Link>
      <br/>
      <br/>
      <Link to={`/campaign`}>
        <bs.Button
          onClick = {evt => {
            Object.values(context.campaigns).map((cam) => (          
                  (rows = rows.filter(function(Donators){
                      return Donators.goal > 50000}))
          ))
          context.campaigns = rows
          context.rows = rows.length
          }}>Goal > $50,000
        </bs.Button>
      </Link>
      <br/>
      <br/>
      <Link to={`/campaign`}>
        <bs.Button
          onClick = {evt => {
          context.campaigns = context.cams
          }}>Refresh Filters
        </bs.Button>
      </Link>





  {/* <bs.Nav className="flex.column">
    
    <bs.Nav.Item>
    <Link
      to={`/`}
      className='nav-link'
      >
        All Product({productCount})
      </Link>
      {Object.entries(context.categories).map(([cats]) => (
        <Link 
        to={`/category/${cats}`}
        key = {cats} 
        className='nav-link'
        >
        {cats} 
        ({category.filter(function(categoryName){
          return categoryName.category.title === cats}).length})
        </Link>
      ))}
    </bs.Nav.Item>
  </bs.Nav> */}

  
  </>
  )}
   
export default Left_container;