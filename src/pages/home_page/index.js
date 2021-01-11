import React from 'react';
import { connect } from 'react-redux';
import './style.less';
import { HeaderPage } from "../../components";

const HomePage = (props) => {
    // const updateStore = useUpdateStore({ type: types.HOME_UPDATE })

    return (
        <div className="contentGrid home-page">
            <HeaderPage title={props.item.label} icon={props.item.icon} />
        </div>
    )
}

export default connect((store) => {
    return {
        home: store.home,
    };
})(HomePage);