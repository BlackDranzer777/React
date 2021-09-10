import React from 'react';
import './Sidebar.css';
import {LineStyle, ShowChart, AttachMoney} from "@material-ui/icons";
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon"/>
                                Home
                            </li>
                        </Link>
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <ShowChart className="sidebarIcon"/>
                                Users
                            </li>
                        </Link>
                        <Link to="/newuser" className="link">
                            <li className="sidebarListItem">
                                <AttachMoney className="sidebarIcon"/>
                                New User
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <ShowChart className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <ShowChart className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar;
