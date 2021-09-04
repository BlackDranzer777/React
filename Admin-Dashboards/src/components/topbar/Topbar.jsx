import React from 'react';
import './Topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Wizards Network</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://www.irishtimes.com/polopoly_fs/1.3101809.1497028489!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
