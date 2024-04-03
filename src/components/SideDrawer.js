import React from "react";
import { NavLink, Link } from "react-router-dom";
import brochurePdf from "../assets/CITK Placement Brochure 2023-24.pdf";
import "./Styles/Navbar.css";

class SideDrawer extends React.Component {
  state = {
    showDropDownAcademics: false,
    showDropdownStatistics: false,
  };
  handleDropDownAcademics = () => {
    this.setState((cs) => ({
      showDropDownAcademics: !cs.showDropDownAcademics,
      showDropdownStatistics: false,
    }));
  };
  handleDropDownWhyUs = () => {
    this.setState((cs) => ({
      showDropDownWhyUs: !cs.showDropDownWhyUs,
      showDropdownWhyUs: false,
    }));
  };
  handleDropDownContactUs = () => {
    this.setState((cs) => ({
      showDropDownContactUs: !cs.showDropDownContactUs,
      showDropdownContactUs: false,
    }));
  };
  handleDropdownStatistics = () => {
    this.setState((cs) => ({
      showDropdownStatistics: !cs.showDropdownStatistics,
      showDropDownAcademics: false,
    }));
  };
  render() {
    let drawerClass = "side-drawer";
    if (this.props.show) drawerClass = "side-drawer open";
    return (
      <div className={drawerClass}>
        <div className="side">
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <span onClick={this.props.click} className="sidebar-logo-text">
              Hanuman
            </span>
          </Link>
          <span className="cross-btn" onClick={this.props.click}>
            <i className="fas fa-times fa-2x" />
          </span>
        </div>

        <ul>
          <li onClick={this.props.click}>
            <NavLink to="/home" exact className="activeclass">
              Home
            </NavLink>
          </li>
          <li className="activeclass" onClick={this.handleDropDownAcademics}>
            Services <i className="fa fa-caret-down" />
          </li>
          {this.state.showDropDownAcademics ? (
            <ul className="drp-down">
              <li
                onClick={() => this.props.click(this.handleDropDownAcademics)}
                className="activeclass"
              >
                <NavLink to="/courses" exact className="activeclass">
                  Road Ambulance
                </NavLink>
              </li>
              <li
                onClick={() => this.props.click(this.handleDropDownAcademics)}
                className="activeclass"
              >
                <NavLink to="" exact className="activeclass">
                Train Ambulance
                </NavLink>
              </li>
              <li
                onClick={() => this.props.click(this.handleDropDownAcademics)}
                className="activeclass"
              >
                <NavLink to="/Strength" exact className="activeclass">
                Air Ambulance
                </NavLink>
              </li>
              <li
                onClick={() => this.props.click(this.handleDropDownAcademics)}
                className="activeclass"
              >
                <NavLink to="/mou" exact className="activeclass">
                  Admission Assistance
                </NavLink>
              </li>
            </ul>
          ) : null}

          <li onClick={this.props.click}>
            <NavLink to="/our-recruiters" exact className="activeclass">
              Blogs
            </NavLink>
          </li>

          <li className="activeclass" onClick={this.handleDropDownWhyUs}>
            About Us <i className="fa fa-caret-down" />
          </li>
          {this.state.showDropDownWhyUs ? (
            <ul className="drp-down">
              <li
                onClick={() => this.props.click(this.handleDropDownWhyUs)}
                className="activeclass"
              >
                <NavLink to="/WhyCitk" exact className="activeclass">
                  Media
                </NavLink>
              </li>
              <li
                onClick={() => this.props.click(this.handleDropDownWhyUs)}
                className="activeclass"
              >
                <NavLink to="/demographics" exact className="activeclass">
                  Our Gallery
                </NavLink>
              </li>
              <li
                onClick={() => this.props.click(this.handleDropDownWhyUs)}
                className="activeclass"
              >
                <NavLink to="/techclubs" exact className="activeclass">
                  Partner
                </NavLink>
              </li>
              <li
                onClick={() => this.props.click(this.handleDropDownWhyUs)}
                className="activeclass"
              >
              </li>
            </ul>
          ) : null}

          <li onClick={this.props.click}>
            <NavLink to="/procedure-and-policies" exact className="activeclass">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideDrawer;
