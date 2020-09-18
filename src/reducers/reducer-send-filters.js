import { SEND_FILTERS } from "../actions";

export default function(state = {radius: 2500, destination: 'bars'}, action) {
    console.log('in FILTERS reducer, looking for actions')
    switch(action.type) {
        case SEND_FILTERS:
            console.log('SEND FILTERS reducer', action.payload)
            return action.payload
        default:
            return state;
    }

}

//data sent to details.js