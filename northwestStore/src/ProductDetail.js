import React from 'react';
import { useRouteMatch, useHistory } from "react-router-dom";
import AppContext from './context'
import * as bs from 'react-bootstrap'



function ProductDetail(props) {
   const match = useRouteMatch("/product/:pid");
   const [img_idx, setImgIdx] = React.useState("1")
   const context = React.useContext(AppContext)
   const product = context.products[match.params.pid]
   const history = useHistory()


   if (!product){
      return (
         <h1 style={{textAlign: "center", marginTop: "20px"}}>Not Found</h1>
      )
   }
   else {
      return (
         <div>
            <div className='float-right mt-5 pt-5' style={{display: 'flex', justifyContent: 'center'}}>
               <img alt="main" className="border" style= {{height:300, width:300}} src={`/media/products/${product.filename}-${img_idx}.png`}></img>
            </div>
            <div key={product.id}  style={{marginTop: "25px", marginLeft: "10px"}}>
               <center className='mb-5'><h2>Campaign name here</h2></center>
               <h4>Raised: ${product.price}</h4>
               <h4>Goal: $1000.00</h4>

               <p className='mt-5'>Our Description here however long we want it to be and it will not go behind the picture right??
                  testing...................................... Okay looks like its good to go. button will use the dataset and go to the go fund me 
                  webpage</p>
               <center className='mt-5'>
                  <bs.Button
                    variant="success"
                    href="https://www.gofundme.com/?utm_source=google&utm_medium=cpc&utm_campaign=GoFundMe_US_EN_Exact_Desktop_C
                    onvertersVisitors&utm_content=gofundme&utm_term=go%20fund%20me_e_c_ad&gclid=CjwKCAjwpqv0BRABEiwA-TySwdNquxZqQeZI_
                    mSGrKldDcd4W-C-lCYX0o2-tKRJL_phle9CuuzAtxoCfaMQAvD_BwE"
                  //   onClick={e => {
                  //       context.addToCart(product.id)
                  //       history.push('/cart')
                  //   }}
                     >
                        Go fund me
                     </bs.Button>
               </center><p className="mt-5">

               </p>
            </div>

         </div>
      )
   }
}

export default ProductDetail;