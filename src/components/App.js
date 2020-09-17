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

         this.handleClick = this.handleClick.bind(this);
     }

   handleClick(){
     this.props.fetchDestination();
     this.props.history.push("/details")
   }

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
                                checked={this.state.selectedOption === "option1"}
                                onChange={this.handleOptionChange}
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
                                checked={this.state.selectedOption === "option2"}
                                onChange={this.handleOptionChange}
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
                                checked={this.state.selectedOption === "option3"}
                                onChange={this.handleOptionChange}
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
                                checked={this.state.selectedOption === "option1"}
                                onChange={this.handleOptionChange}
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
                                checked={this.state.selectedOption === "option2"}
                                onChange={this.handleOptionChange}
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
                                checked={this.state.selectedOption === "option3"}
                                onChange={this.handleOptionChange}
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