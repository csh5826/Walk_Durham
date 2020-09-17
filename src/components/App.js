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