import React from 'react';
import { useRouteMatch } from "react-router-dom";
import AppContext from './context'
import * as bs from 'react-bootstrap'



function ProductDetail(props) {

   const match = useRouteMatch("/campaign/:pid");
   const context = React.useContext(AppContext)
   const campaign = context.campaigns[match.params.pid - 1]
   // const history = useHistory()
   let isCharity = true
   if(context.campaigns.length > 490)
   {
      context.count = 0
   }
   else
   {
      context.count = 1
   }
   

   if (context.campaigns.is_charity){
      isCharity = "Yes" 
   }
   else{
      isCharity = "No" 
   }


   if (!product){
      return (
         <h1 style={{textAlign: "center", marginTop: "20px"}}>Not Found</h1>
      )
   }
   else {
      return (
         <div className="d-flex flex-row">
            <div key={product.id}  style={{marginTop: "25px", marginLeft: "10px"}}>
               <h2>{product.name}</h2>
               <h3>${product.price}</h3>
               <p>{product.description}</p>
               <p className="mt-5">
                <bs.Button
                    variant="warning"
                    onClick={e => {
                        context.addToCart(product.id)
                        history.push('/cart')
                    }}
                     >
                        Add to Cart
                     </bs.Button>
               </p>
            </div>
            <div className="float-right" style={{marginTop: "25px", marginLeft: "5px"}}>
               <img alt="main" className="border" style= {{height:300, width:300}} src={`/media/products/${product.filename}-${img_idx}.png`}></img>
               <div>
                  {['1', '2', '3', '4'].map(img_idx =>
                     (
                        <img alt="smaller" src={`/media/products/${product.filename}-${img_idx}.png`}
                        className = "border rounded at at-3 mx-1"
                        style= {{height:30, width:30}}
                        onMouseEnter={e=>{
                           setImgIdx(img_idx)
                        }}
                        />
                     ))}
               </div>
            </div>
         </div>
      )
   }
}

export default ProductDetail;