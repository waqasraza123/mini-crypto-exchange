import React, {Component} from "react";
import Login from "./components/login";
import Register from "./components/register";
import Navbar from "./components/navbar";
import Listings from "./components/listings";


/**
 * constants and variables
 * @type {string}
 */
const classes = "root-container";
const isLoggedIn = false;
const isAdmin = true; //just for development purposes
/**
 * Root level component to host all the
 * child components
 */
export default class App extends Component {

    render() {
        return (
        <div className={classes}>
            <Navbar />
            <div className="container mt-4">
                <Listings />
            </div>
        </div>
        );
    }
}
