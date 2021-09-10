import React from 'react';
import EnhancedTable from '../../components/table/EnhancedTable';
import StickyHeadTable from '../../components/table/StickyHeadTable';
import './UserList.css';

export default function UserList() {

    return (
        <div className="userList">
            <StickyHeadTable/>
            <EnhancedTable/>
        </div>
    )
}
