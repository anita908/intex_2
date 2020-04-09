import React from 'react';
import { useRouteMatch, useHistory } from "react-router-dom";
import AppContext from './context'
import * as bs from 'react-bootstrap'



function ProductDetail(props) {
   const match = useRouteMatch("/campaign/:pid");
   const context = React.useContext(AppContext)
   const campaign = context.campaigns[match.params.pid]
   let isCharity = true
   
   if (context.campaigns.is_charity){
      isCharity = "Yes" 
   }
   else{
      isCharity = "No" 
   }

   

   if (!campaign){
      return (
         <h1 style={{textAlign: "center", marginTop: "20px"}}>Not Found</h1>
      )
   }
   else {
      return (
         <div>
            <center className='mt-3'><h2>{campaign.title}</h2></center>
            <div className='float-right ml-5 pt-5 mr-5' style={{display: 'flex', justifyContent: 'center'}}>
               <img alt="main" className="border" style= {{height:266, width:400}} src={`${campaign.campaign_image_url}`}></img>
            </div>
            
            <div key={campaign.id}  style={{marginTop: "50px", marginLeft: "50px"}}>
               <h5>Raised: ${campaign.current_amount}</h5>
               <h5>Goal: ${campaign.goal}</h5>
               <h5>Numbers of Donators: {campaign.donators}</h5>
               <h5>Days Active: {campaign.days_active}</h5>
               <h5>Name: {campaign.user_first_name} {campaign.user_last_name}</h5>
               <h5>Numbers of Campaign Hearts: {campaign.campaign_hearts}</h5>
               <h5>Number Social Share: {campaign.social_share_total}</h5>
               <h5>City: {campaign.location_city}</h5>
               <h5>Country: {campaign.location_country}</h5>
               <h5>Is Charity: {isCharity}</h5>

               <p className='mt-5 mr-5'>Description:{campaign.description}</p>
               <center className='mt-5'>
                  <bs.Button
                    variant="success"
                    href={campaign.url}
                  //   onClick={e => {
                  //       context.addToCart(product.id)
                  //       history.push('/cart')
                  //   }}
                     >
                        GoFundMe
                     </bs.Button>
               </center><p className="mt-5">

               </p>
            </div>

         </div>
      )
   }
}

export default ProductDetail;