import React, { Component } from "react"
import './form.css'

import Homecardcreate from './Homecardcreate.js';

class Cardcreateform extends Component {

    constructor() {
        super()

        this.state = {
            phonename: '',
            phonecolor: '',
            phoneid: '',
            phonepath: '',
            phonerate: '',
            phonecount:0,
            phoneboo:true
        }
    }

    render() {
        var phoneboo = 'true'

        const handle = (e) => {

            if (e.target.name === 'name') {

                this.setState({ phonename: e.target.value })

            }

            else if (e.target.name === 'color') {

                this.setState({ phonecolor: e.target.value })
            }

            else if (e.target.name === 'ipath') {

                this.setState({ phonepath: e.target.value })
            }

            else if (e.target.name === 'rate') {

                this.setState({ phonerate: e.target.value })
            }

            else if (e.target.name === 'id') {

                this.setState({ phoneid: e.target.value })
            }




        }

        const sub = (e) => {
            e.preventDefault()
            // localStorage.clear()

            const localobj = {
                phoneid: this.state.phoneid,
                phonename: this.state.phonename,
                phonecolor: this.state.phonecolor,
                phonepath: this.state.phonepath,
                phonerate: this.state.phonerate,
                phonecount:this.state.phonecount,
                phoneboo:this.state.phoneboo

            }

            storedata(localobj)

            this.setState({ phonename: '' })
            this.setState({ phoneid: '' })
            this.setState({ phonepath: '' })
            this.setState({ phonecolor: '' })
            this.setState({ phonerate: '' })

        }

        const storedata=(localobj)=>{
            const storeformdata=JSON.parse(localStorage.getItem(('localobj')))||[]
            storeformdata.push(localobj)

            localStorage.setItem('localobj',JSON.stringify(storeformdata))
        }

        return <section>

            <form onSubmit={sub}>

                <label >Id : </label>
                <input name='id' onChange={handle} value={this.state.phoneid} placeholder='phoneid'></input><br></br><br></br>

                <label>Name : </label>
                <input id='name' name='name' onChange={handle} value={this.state.phonename} placeholder='phonename'></input><br></br><br></br>

                <label >color : </label>
                <input name='color' id='age' onChange={handle} value={this.state.phonecolor} placeholder='phonecolor'></input><br></br><br></br>

                <label>Path : </label>
                <input name='ipath' onChange={handle} value={this.state.phonepath} placeholder='phonepath'></input><br></br><br></br>

                <label >rate : </label>
                <input name='rate' onChange={handle} value={this.state.phonerate} placeholder='phonerate'></input><br></br><br></br>


                <button>Submit</button>
            </form>

            {/* <div id='home'>Go to Home</div> */}

            <Homecardcreate/>

        </section>
    }
}

export default Cardcreateform