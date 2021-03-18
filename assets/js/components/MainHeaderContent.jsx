import React, {Component} from 'react'
import './sass/MainHeaderContent.scss'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default class MainHeaderContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0
        }
    }

    componentDidMount() {
        this.setState({
            height: document.documentElement.clientHeight - document.getElementById('main-navbar').clientHeight
        })
    }

    render() {
        return (
            <div className="main-content-home d-flex flex-column justify-content-center"
                 style={{height: this.state.height}}>
                <div className={'container'}>
                    <div className="row">
                        <div className="col-md-8">
                            <h1>Lorem ipsum dolor sit.</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa id in odio omnis sed sunt
                                tenetur! Alias aperiam architecto corporis hic illo iste iusto, labore laboriosam, natus
                                quibusdam
                                unde.
                            </p>
                            <div className="actions-button">
                                <a href="" className="btn btn__primary">
                                    Learn more
                                    <AiOutlineArrowRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}