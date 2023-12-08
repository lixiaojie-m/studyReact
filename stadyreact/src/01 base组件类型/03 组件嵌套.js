import React, { Component } from 'react'
import { render } from 'react-dom'

class Navbar extends Component {
    render(){
        return(
            <div>Navbar</div>
        )
    }
}

function Swiper(){
    return(
        <div>Swiper</div>
    )
}

const Tabbar = ()=>{
    return(
        <div>Tabbar</div>
    )
}


export default class APP01 extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}
