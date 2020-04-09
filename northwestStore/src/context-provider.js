import React from 'react'
import axios from 'axios'
import AppContext from './context'
import App from './App'
import { produce } from 'immer'


/** The context provider for our app */
export default class AppProvider extends React.Component {

    constructor(props) {
        super(props)
        this.actions = {
            addToCart: this.addToCart,
            removeFromCart: this.removeFromCart,
            clearCart: this.clearCart,
            getCartTotal: this.getCartTotal,
        }
        this.state = {
            categories: {},
            products: {},
            campaigns: {},
            category: {},
            rows : 0,
            count: 1,
            show: false,
        }
    }

    render() {
        return (
            <AppContext.Provider value={{...this.state, ...this.actions}}>
                <App />
            </AppContext.Provider>
        )
    }

    async componentDidMount() {
        const respc = await axios.get('/api/category/')
        // console.log(respc)
        const cats ={}
        for (const c of respc.data) {
           cats[c.title] = c
        }

        this.setState({
           categories:cats
        })

        const respp = await axios.get('/api/product/')
        // console.log(respp)
        const pros ={}
        for (const p of respp.data) {
            pros[p.id] = p
        }
    
        this.setState({
           products:pros
        })

        const respca = await axios.get('http://localhost:8000/api/campaign/')
        console.log(respca)
        const cams ={}
        for (const p of respca.data) {
            cams[p.id] = p
        }

        this.setState({
            campaigns:cams
        })
    }

    addToCart = pid => {
        this.setState(produce(this.state, draft => {
            draft.cart[pid] = (draft.cart[pid] || 0) + 1

            let count = 0
            for (const qty of Object.values(draft.cart)) {
                count += qty
            }
            draft.cartCount = count
        }))
    }
}