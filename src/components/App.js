// incapsulates our entire intitial page on load "/"

// includes our options for picking our locations
// destination (pubs, parks or museums)
// distnace (1 mile, 3 miles , 5 miles)

import React from 'react';
import { Component } from 'react';
// import { fetchDestination } from '../actions';
import { sendDistance } from '../actions';
import { sendFilters } from '../actions' ;
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOptionDestination: 'bars',
      selectedOptionDistance: '2500',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOptionChangeDestination = this.handleOptionChangeDestination.bind(
      this
    );
    this.handleOptionChangeDistance = this.handleOptionChangeDistance.bind(
      this
    );
    // this.setDistanceToDisplay = this.setDistanceToDisplay.bind(this);
  }

  handleClick() {  // moving fetch to details component
    // this.props.fetchDestination(
    //   this.state.selectedOptionDistance,
    //   this.state.selectedOptionDestination
    // );
    this.props.sendFilters( this.state.selectedOptionDistance,
      this.state.selectedOptionDestination);
    //the following line is deprecated code
    this.props.sendDistance(this.state.selectedOptionDistance);
    this.props.history.push('/details');
  }

  handleOptionChangeDestination(changeEvent) {
    this.setState({
      selectedOptionDestination: changeEvent.target.value,
    });
  }

  handleOptionChangeDistance(changeEvent) {
    this.setState({
      selectedOptionDistance: changeEvent.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className='row bg-light'>
          <div className='col'>
            <h1>Durham - get out there and walk!</h1>
          </div>
        </div>
        <div className='row'>
          <div className='destinations col-md-3'>
            <div className='pscard border rounded-sm shadow-lg mt-5 p-2'>
              <h3>Where do you want to go?</h3>
              <form>
                <div className='form-check'>
                  <label>
                    <input
                      type='radio'
                      name='react-tips'
                      value='bars'
                      checked={this.state.selectedOptionDestination === 'bars'}
                      onChange={this.handleOptionChangeDestination}
                      className='form-check-input'
                    />
                    the pub
                  </label>
                </div>

                <div className='form-check'>
                  <label>
                    <input
                      type='radio'
                      name='react-tips'
                      value='gardens_and_parks'
                      checked={
                        this.state.selectedOptionDestination ===
                        'gardens_and_parks'
                      }
                      onChange={this.handleOptionChangeDestination}
                      className='form-check-input'
                    />
                    the park
                  </label>
                </div>

                <div className='form-check'>
                  <label>
                    <input
                      type='radio'
                      name='react-tips'
                      value='museums'
                      checked={
                        this.state.selectedOptionDestination === 'museums'
                      }
                      onChange={this.handleOptionChangeDestination}
                      className='form-check-input'
                    />
                    a museum
                  </label>
                </div>
              </form>
            </div>
          </div>

          <div className='distance pt-5'>
            <div className='col-md-8'>
              <div className='pscard border rounded-sm shadow-lg mt-5 p-2'>
                <h3>How far do you want to walk?</h3>
                <form>
                  <div className='form-check'>
                    <label>
                      <input
                        type='radio'
                        name='react-tips'
                        value='2500'
                        checked={this.state.selectedOptionDistance === '2500'}
                        onChange={this.handleOptionChangeDistance}
                        className='form-check-input'
                      />
                      about 1 mile
                    </label>
                  </div>

                  <div className='form-check'>
                    <label>
                      <input
                        type='radio'
                        name='react-tips'
                        value='5700'
                        checked={this.state.selectedOptionDistance === '5700'}
                        onChange={this.handleOptionChangeDistance}
                        className='form-check-input'
                      />
                      about 3 miles
                    </label>
                  </div>

                  <div className='form-check'>
                    <label>
                      <input
                        type='radio'
                        name='react-tips'
                        value='9000'
                        checked={this.state.selectedOptionDistance === '9000'}
                        onChange={this.handleOptionChangeDistance}
                        className='form-check-input'
                      />
                      about 5 miles
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-sm'>
              <h3>
                <button
                  className='float-right btn badge badge-light'
                  onClick={this.handleClick}>
                  let's walk!
                </button>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { destinations: state.destinations,
    selectedRadius: state.selectedRadius };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendDistance, sendFilters }, dispatch);
// fetchDestination, ommitted
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

