import React, { Component } from "react"
import Navbar from "./js/components/Navbar";
import MainHeaderContent from "./js/components/MainHeaderContent";
import Loading from "./js/components/Loading";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarHeight: 0,
            isLoaded: false
        }
        this.setNavbarHeight = this.setNavbarHeight.bind(this)
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                isLoaded: true
            })
        }, 1000)
    }

    setNavbarHeight (height) {
        this.setState({
            navbarHeight: height
        })
    }

    render() {
       return  <>
           <div className={this.state.isLoaded ? 'd-none' : ''}>
               <Loading  />
           </div>
           {this.state.isLoaded &&
               <>
                   <Navbar />
                   <MainHeaderContent
                       onNavbarMount={this.setNavbarHeight}
                   />
               </>
           }
       </>
    }
}