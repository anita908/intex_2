import React from 'react';
import * as bs from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useRouteMatch } from "react-router-dom";
import AppContext from './context'


function ProductCard(props) {
   const match = useRouteMatch("/campaign/:pid")
   const context = React.useContext(AppContext)
   const NAME_AR = Object.values(context.campaigns)

   const rows =[]
   for (const p of NAME_AR) {
      if (match === null){
         rows.push(p)
      }
      // else if (match.params.pid === p.category.title){
      //    rows.push(p)
      // }
   } 
   return (
      <div>

         <bs.Container style={{marginTop: "2rem"}}>
            <bs.Row>
               {rows.map(n => {
                  return (
                     
                     <bs.Col md="3" key={n.id}>
                        <bs.Card bg="light" style={{ width: '12rem', marginBottom: "2rem"}}>
                           <bs.Card.Img src={n.campaign_image_url} style={{paddingTop: '20px', marginTop: "-1.3rem"}}/>
                           <bs.Card.Header className="text-center">
                              <bs.Card.Title><Link className='btn' to={`/campaign/${n.id}`}><b>{n.title}</b></Link></bs.Card.Title>

                           </bs.Card.Header>
                        </bs.Card>
                     </bs.Col>
                     )
                  })}
            </bs.Row>
         </bs.Container>
      </div>
   )
}

export default ProductCard;