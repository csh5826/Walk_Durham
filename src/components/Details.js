// incapsulates our entire /details page

import React from 'react';
import { Component } from 'react';
import { fetchDestination } from '../actions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

class Details extends Component {
    constructor(props){
        super(props)
    }
    //handles event that displays details-info

    //will want to make mapping loop of our detail listings
    renderDestinations(destinationData) {
        // console.log("destination data", destinationData)
        const name = destinationData.name;
        let distance = destinationData.dist;
        const id = destinationData.xid;
        // console.log('name', name, 'distance', distance) 
        distance = Math.round((distance * .0006) * 100)/100
        return (
            <li key={id}>{name} distance: {distance} miles from you</li>
        )
    }
    render(){
        // console.log('this is what we are looking for:', this.props.destinations)
        return (
            <div>
                <div className="row bg-light">
                    <div className="col">
                <h1>Durham - get out there and walk!</h1>
                </div>
                </div>
                <div className="row">
                <div className="pscard col-4 border rounded-sm shadow-lg mt-5 p-2">
                    <h3>all the pubs:</h3>
                    <ul>
                        {this.props.destinations.map(this.renderDestinations)}
                    </ul>
                    <h3><Link to="/" className="float-right badge badge-light">Back</Link></h3>
                </div>
                <div className="col">
                    <div className="pscard border rounded-sm shadow-lg mt-5 p-2">Extra Box</div>
                </div>
                </div>
                

            </div>
        )
    }

}

function mapStateToProps (state) {
    return { destinations: state.destinations}
}
export default connect(mapStateToProps)(Details);