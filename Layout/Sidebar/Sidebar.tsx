import React, {FC} from 'react';
import {SidebarProps} from "./Sidebar.props";

const Sidebar:FC<SidebarProps> = ({ ...props}) => {
    return (
        <div {...props}>
            Sidebar
        </div>
    );
};

export default Sidebar;