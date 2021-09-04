import React from 'react';
import './WidgetSm.css';
import { Visibility } from '@material-ui/icons';

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Network issue" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jane Doe</span>
                        <span className="widgetSmUserTitle">Grey Hat Hacker</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Network issue" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jane Doe</span>
                        <span className="widgetSmUserTitle">Grey Hat Hacker</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Network issue" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jane Doe</span>
                        <span className="widgetSmUserTitle">Grey Hat Hacker</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
