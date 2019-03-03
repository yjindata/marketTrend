import React from "react";
import ReactDOM from "react-dom";
//import {getAllProducts} from './actions'
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main";
import config from "./awe-exports"; // new
import Amplify from "aws-amplify"; // new
Amplify.configure(config); // new

ReactDOM.render(<Main />, document.getElementById("root"));
