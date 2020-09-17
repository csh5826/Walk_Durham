// incapsulates our entire intitial page on load "/"

// includes our options for picking our locations 
// destination (pubs, parks or museums)
// distnace (1 mile, 3 miles , 5 miles)

import React from 'react';
import { Component } from 'react';
import { fetchDestination } from '../actions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


 class App extends Component {
     constructor(props) {
         super(props);

         this.blankFunction = this.blankFunction.bind(this);
     }

   blankFunction(){
    this.props.fetchDestination();
   }


    render() {
        //this.blankFunction()
        return (
            <div>
                <h1>Durham - get out there and walk!</h1>
                <div className="destinations">
                    <h3>Where do you want to go?</h3>
                    <ul>
                        <li>the pub</li>
                        <li>the park</li>
                        <li>a museum</li>
                    </ul>
                </div>
                <div className="distance">
                    <h3>How dar do you want to walk?</h3>
                    <ul>
                        <li>1 mile</li>
                        <li>3 mile</li>
                        <li>5 mile</li>
                    </ul>

                    <button>let's walk!</button>
                </div>

            </div>
        )
    }

}
function mapStateToProps(state) {
    console.log(state)
    return { destinations: state.destinations}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchDestination }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);