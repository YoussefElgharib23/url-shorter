import React, { Component } from "react"
import { ImSpinner8 } from 'react-icons/im'
import Loader from "react-loader-spinner";

export default class Loading extends Component {
    render() {
        return (
            <div className={'vh-100 d-flex align-items-center justify-content-center w-100'}>
                <Loader type="ThreeDots"
                        color="#000"
                        height={50}
                        width={50}
                />
            </div>
        )
    }
}