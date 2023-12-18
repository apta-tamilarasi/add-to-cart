import React, { Component } from "react"
import './form.css'

import { FaTrash} from 'react-icons/fa'

class Homecardcreate extends Component {

    constructor() {
        super()

        this.state = {
            arr: JSON.parse(localStorage.getItem('localobj'))
        }

        console.log(this.state.arr)

    }
   

    render() {


        const de=(val)=>{
            console.log('decrement')
           let x= this.state.arr.map((e)=>{
                return val===e.phoneid?e.phonecount>0?{...e,phonecount:e.phonecount-1}:e:e
            })

            console.log(x)

            this.setState({arr:x})
        }

        
        const ind=(val)=>{
            console.log('increment')

            let y=this.state.arr.map((e)=>{
                return val===e.phoneid?{...e,phonecount:e.phonecount+1}:e
            })
            console.log(y)

            this.setState({arr:y})
        }
      

        const del = (val) => {
            console.log('hello')
           
            let y = this.state.arr.map((e) => {
                return val === e.phoneid ? { ...e, phoneboo: e.phoneboo = false } : e
            })

            console.log(y)
            this.setState({ arr: y })
            console.log(this.state.arr)

        }

        return <section>

            <div className="formcon">

                {
                    this.state.arr.map((a, i) => {

                        return a.phoneboo === true ?

                            <div className="formcol" key={i}>
                                <div className="formimage">
                                    <img src={a.phonepath} alt="loading"></img>
                                </div>

                                <div className="formcontent">
                                    <h2 style={{ color: 'purple' }}>{a.phonename}</h2>
                                    <p>{a.phonecolor}</p>
                                    <p>{a.phonerate}</p>
                                </div>
                                <div>
                                    <button onClick={()=>{de(a.phoneid)}}> -</button><span>{a.phonecount}</span> <button onClick={()=>{ind(a.phoneid)}}> +</button>
                                </div>
                                <div className="formicon">
                                    <div >
                                        <FaTrash onClick={() => del(a.phoneid)} />
                                    </div>

                                </div>


                            </div> : ''
                    })
                }

            </div>

        </section>
    }
}

export default Homecardcreate