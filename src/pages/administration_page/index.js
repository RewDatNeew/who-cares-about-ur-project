import React, {useEffect} from 'react';
import {connect} from "react-redux";
import { HeaderPage } from "../../components/header-page";
// import { getRegisteredUsers } from "./duck/action";

const AdministrationPage = (props) => {
    const {
        registered = []
    } = props.admin;

    // useEffect(() => {
    //     props.dispatch(getRegisteredUsers())
    // }, []);

    console.log({registered})

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
