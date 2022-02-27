import axios from "axios";
// initialise axios for react HTTP client
export default axios.create({
    baseURL: "http://Dockertestpg10-env-2.eba-yp3imrap.eu-central-1.elasticbeanstalk.com/getentities",// change the baseURL that depends on REST APIs that my server configures
    headers:{
        "Content-type":"application/json"
    }
});