import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar className="bg-dark">
        <Link to={"/"} className="navbar-brand text-white">
          <FontAwesomeIcon icon={faChartArea} />
          &nbsp;&nbsp;
          <span className="font-title">Stock Analyzer</span>
        </Link>
      </Navbar>
    );
  }
}

export default NavigationBar;
