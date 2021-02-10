import React, {useEffect} from 'react';
import {connect} from "react-redux";
import { HeaderPage } from "../../components/header-page";

const AdministrationPage = (props) => {
    const {
        usersList = [],
    } = props.admin;

    return (
        <div className="admin">
            <HeaderPage title={props.item.label} icon={props.item.icon} />
        </div>
    )
}

export default connect((store) => {
    return {
        admin: store.admin,
    }
})(AdministrationPage)
