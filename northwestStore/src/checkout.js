import './CSS/todo.css'
import React from 'react'
import * as bs from 'react-bootstrap'
import axios from 'axios'
import { Formik, Form, Field} from 'formik'
import { useHistory } from 'react-router-dom'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import { formatNumber } from './util'
import AppContext from './context'


const stripePromise = loadStripe("pk_test_gq4BPhqaP6UxmHhb6DwVeTkq00JErkzWAq");


function Checkout(props) {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutController />
        </Elements>
    )
}
export default Checkout


const CheckoutController = props => {
    const context = React.useContext(AppContext)
    const history = useHistory()
    const stripe = useStripe()
    const elements = useElements()
    const [stripeError, setStripeError] = React.useState(null)

    return (
        <Formik
        >{form => (
            <>
                {stripeError &&
                    <div className="mb-3 text-center text-danger">{stripeError}</div>
                }
                <PaymentForm form={form} />
            </>
        )}</Formik>
    )
}


/**
 * The form layout/html.
 */
const PaymentForm = props => (
    <Form>
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
                            <label>Campaign Goal Amount :</label><br /> <input type="text" placeholder="$" /><br />
                            <label>Auto facebook post most enabled</label><br />
                            <select defaultValue="Select --">
                                <option defaultValue>Select --</option>
                                <option value="male">True</option>
                                <option value="female">False</option>
                            </select><br />
                            <label>Is it for charity?</label><br />
                            <select defaultValue="Select --">
                                <option defaultValue>Select --</option>
                                <option value="male">True</option>
                                <option value="female">False</option>
                            </select><br />
                            <label>Is the charity validated?</label><br />
                            <select defaultValue="Select --">
                                <option defaultValue>Select --</option>
                                <option value="male">True</option>
                                <option value="female">False</option>
                            </select><br />
                            <label>Is it anonymous?</label><br />
                            <select defaultValue="Select --">
                                <option defaultValue>Select --</option>
                                <option value="male">True</option>
                                <option value="female">False</option>
                            </select><br />
                            <label>Is it visible in the search?</label><br />
                            <select defaultValue="Select --">
                                <option defaultValue>Select --</option>
                                <option value="male">True</option>
                                <option value="female">False</option>
                            </select><br />
                            <label>How many campaign hearts?</label><br /> <input type="text" placeholder="#" /><br />
                            <label>Write the description of your campaign below:</label><br />
                            <textarea style={{width: "255px", height: "100px", borderRadius: "5px"}}></textarea>
                            <br /><br />
                            <input type="submit" value="Submit" style={{marginLeft: "7rem"}}/>
                        </bs.Card.Body>
                    </bs.Card>
                </bs.Col>
                <bs.Col md="3">
                </bs.Col>
            </bs.Row>
        </bs.Container>
    </Form>
)


/**
 * A form input.
 *   props.title - the title that shows above the input box
 *   props.type - the type of input (see React Bootstrap Form.Control)
 *   props.placeholder - placeholder text in the input
 */
const Input = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
            {props.title &&
                <bs.Form.Label>{props.title}</bs.Form.Label>
            }
            <bs.Form.Control
                type="text"  // ...rProps.field may override this default
                disabled={rProps.form.isSubmitting}
                placeholder={props.placeholder}
                {...rProps.field}
            />
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)
