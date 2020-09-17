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
    
    render(){
        return (
            <div>
                <div className="kinds">
                    <h3>all the pubs:</h3>
                    <ul>
                        <li>pub 1</li>
                        <li>pub 2</li>
                        <li>pub 3</li>
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