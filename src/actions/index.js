import axios from "axios";

export const FETCH_DESTINATIONS = "fetch_destinations";

const ROOT_URL = "https://api.opentripmap.com/0.1/en/places/";
const API_KEY = "&apikey=5ae2e3f221c38a28845f05b6f59339d379a141fda53f5bd095ddcbb9";  
const COORDINATES = "&lon=-78.9032316&lat=35.9962091&";
const FORMAT = "&format=json&limit=5";

// need radius variable 
// need kinds variable 
//https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=-78.9032316&lat=35.9962091&kinds=museums&format=json&limit=5&apikey=5ae2e3f221c38a28845f05b6f59339d379a141fda53f5bd095ddcbb9

export function fetchDestination(radius, kinds) {
    const request = axios.get('https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=-78.9032316&lat=35.9962091&kinds=museums&format=json&limit=5&apikey=5ae2e3f221c38a28845f05b6f59339d379a141fda53f5bd095ddcbb9')
        console.log(request)
    //axios.get(`${ROOT_URL}radius?radius=${radius}${COORDINATES}kinds=${kinds}${FORMAT}${API_KEY}`)

    return {
        type: FETCH_DESTINATIONS,
        payload: request
    }
}