// incapsulates our entire /details page

import React from 'react';
import { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

class Details extends Component {
    constructor(props) {
        super(props);

        this.renderDestinations = this.renderDestinations.bind(this);
    }


   

    renderDestinations(destinationData) {
        console.log("destination data", destinationData)
        const name = destinationData.name;
        let distance = destinationData.dist;
        const id = destinationData.xid;
        // console.log('name', name, 'distance', distance) 
        distance = Math.round((distance * .0006) * 100) / 100        
        return (
            <li key={id}>{name} distance: {distance} miles from you</li>
        )
    }


    render(){
        const uniqueDestinations = (_.uniqBy(this.props.destinations, 'name'));
        uniqueDestinations.reverse();
        const uniqFilteredDestinations =  uniqueDestinations.filter((element) => {
            return element.rate !== 0;
        })

        return (
            <div>
                <div className="kinds">
                    <h3>your destinations!</h3>
                    <ul>
                        {uniqFilteredDestinations.map(this.renderDestinations)}
                    </ul>
                </div>
                <Link to="/">Back</Link>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return { destinations: state.destinations}
}
export default connect(mapStateToProps)(Details);