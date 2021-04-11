import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Link to={"/"} className="navbar-brand">
          <FontAwesomeIcon icon={faChartArea} />
          &nbsp;&nbsp;
          <span>Stock Analyzer</span>
        </Link>
      </Navbar>
    );
  }
}

export default NavigationBar;
