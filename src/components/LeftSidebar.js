import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { isMobileOnly } from "react-device-detect";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

//import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
//import * as FeatherIcon from 'react-feather';

import AppMenu from './AppMenu';
import profilePic from '../assets/images/users/avatar-7.jpg';

import logo from '../assets/images/logo.png';
//import logo2 from '../assets/images/logo2.png';
import { loginUser } from '../redux/auth/actions';
/**
 * User Widget
 */

/**
 * Sidenav
 */
const SideNav = () => {
    return <div className="sidebar-content">
        <div id="sidebar-menu">
            <AppMenu />
        </div>
    </div>
}

class LeftSidebar extends Component {
    menuNodeRef;

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleOtherClick = this.handleOtherClick.bind(this);
    }

    /**
     * Bind event
     */
    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleOtherClick, false);
    };

    /**
     * Bind event
     */
    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleOtherClick, false);
    };

    /**
     * Handle the click anywhere in doc
     */
    handleOtherClick = (e) => {
        if (this.menuNodeRef.contains(e.target)) return;
        // else hide the menubar
        if (document.body && isMobileOnly) {
            document.body.classList.remove('sidebar-enable');
        }
    };

    /**
     * Handle click
     * @param {*} e
     * @param {*} item
     */
    handleClick(e) {
        console.log(e);
    }

    render() {
        const isCondensed = this.props.isCondensed || false;
        console.log("left side bar", this.props.user.Username);
        let username=this.props.user.Username;
        return (
            <React.Fragment>
                <div className='left-side-menu' ref={node => this.menuNodeRef = node}>
                <React.Fragment>
        <div style={{background:'#e5e5e5', padding:'8px 0px'}}>
        <Link to="/" className="">
              <span className="logo-lg ml-2">
                <img src={logo} alt="" height="47" />
              </span>
            </Link>
            </div>
        <div className="media user-profile mt-2 mb-2">
            <div>
            <img src={profilePic} className="avatar-sm rounded-circle mr-2" alt="" />
            </div>
            <div className="media-body">
                <h6 className="pro-user-name mt-0 mb-0">{username}</h6>
                <a className="text-dark" href="/account/logout">Sign Out</a>
            </div>

            
        </div>
    </React.Fragment>
                    {!isCondensed && <PerfectScrollbar><SideNav /></PerfectScrollbar>}
                    {isCondensed && <SideNav />}
                </div>
            </React.Fragment>
        );
    }
}

//export default connect()(LeftSidebar);
const mapStateToProps = (state) => {
    const { user, loading, error } = state.Auth;
    return { user, loading, error };
    
};

export default connect(mapStateToProps, { loginUser })(LeftSidebar);
