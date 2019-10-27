import React from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

import { connect } from 'react-redux';
import { getPersisted } from '../../../../utils/persistState';
import { persistedSignInAction, logout } from '../../../../actions/authAction';
class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  componentDidMount = () => {
    try {
      const auth = getPersisted('auth');
      if (auth) {
        this.props.persistedSignInAction(auth);
      }
    } catch (error) {
    }
  }

  handleClick = () => {
    this.props.logout('auth');
  };

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const { userInfo: { email }, isAuthenticated } = this.props.auths;
    if (!isAuthenticated) return <Redirect to="/sign-in" />
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/avatars/0.jpg")}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">{email}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem tag={Link} to="user-profile-lite">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag={Link} to="/" className="text-danger" onClick={this.handleClick}>
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}

const mapStateToProps = ({ auths }) => {
  return {
    auths,
  }
};

export default connect(mapStateToProps, { persistedSignInAction, logout })(UserActions);