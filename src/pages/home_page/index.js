import React from 'react';
import { connect } from 'react-redux';
import './style.less';
import { Button } from "../../components";

const HomePage = (props) => {
    // const updateStore = useUpdateStore({ type: types.HOME_UPDATE })

    return (
        <div className="home-page">
            <Button type='primary' title="hello" />
        </div>
    )
}

export default connect((store) => {
    return {
        home: store.home,
    };
})(HomePage);