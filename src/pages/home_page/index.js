import React from 'react';
import { connect } from 'react-redux';
import './style.less';
import { HeaderPage } from "../../components";

const HomePage = (props) => {
    // const updateStore = useUpdateStore({ type: types.HOME_UPDATE })

    return (
        <div className="home-page">
            <HeaderPage title={props.item.label} icon={props.item.icon} />
            <div className="content">
                <span>Хелоу! :)</span>
            </div>
        </div>
    )
}

export default connect((store) => {
    return {
        home: store.home,
    };
})(HomePage);