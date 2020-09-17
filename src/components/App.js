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
        
         this.state = {selectedOptionDestination: "bars", selectedOptionDistance: "1610"}
         this.handleClick = this.handleClick.bind(this);
         this.handleOptionChangeDestination = this.handleOptionChangeDestination.bind(this);
         this.handleOptionChangeDistance = this.handleOptionChangeDistance.bind(this);
     }

   handleClick(){
     this.props.fetchDestination(this.state.selectedOptionDistance, this.state.selectedOptionDestination );
     this.props.history.push("/details")
   }

   handleOptionChangeDestination (changeEvent) {
    this.setState({
        selectedOptionDestination: changeEvent.target.value
    });
   };

   handleOptionChangeDistance (changeEvent) {
    this.setState({
        selectedOptionDistance: changeEvent.target.value
    });
   };

    render() {
        return (
            <div>
                <h1>Durham - get out there and walk!</h1>
                <div className="destinations">
                    <h3>Where do you want to go?</h3>
                    <form>

                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="bars"
                                checked={this.state.selectedOptionDestination === "bars"}
                                onChange={this.handleOptionChangeDestination}
                                className="form-check-input"
                            />
                            the pub
                            </label>
                        </div>

                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="gardens_and_parks"
                                checked={this.state.selectedOptionDestination === "gardens_and_parks"}
                                onChange={this.handleOptionChangeDestination}
                                className="form-check-input"
                            />
                            the park
                            </label>
                        </div>

                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="museums"
                                checked={this.state.selectedOptionDestination === "museums"}
                                onChange={this.handleOptionChangeDestination}
                                className="form-check-input"
                            />
                            a museum
                            </label>
                        </div>


                    </form>
                    
                </div>
                <div className="distance">
                    <h3>How far do you want to walk?</h3>
                    <form>

                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="1610"
                                checked={this.state.selectedOptionDistance === "1610"}
                                onChange={this.handleOptionChangeDistance}
                                className="form-check-input"
                            />
                            1 mile
                            </label>
                        </div>

                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="4828"
                                checked={this.state.selectedOptionDistance === "4828"}
                                onChange={this.handleOptionChangeDistance}
                                className="form-check-input"
                            />
                            3 miles
                            </label>
                        </div>

                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="8047"
                                checked={this.state.selectedOptionDistance === "8047"}
                                onChange={this.handleOptionChangeDistance}
                                className="form-check-input"
                            />
                            5 miles
                            </label>
                        </div>


                    </form>

                    <button onClick={this.handleClick}>let's walk!</button>
                </div>

            </div>
        )
    }

}
function mapStateToProps(state) {
    // console.log(state)
    return { destinations: state.destinations}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchDestination }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);