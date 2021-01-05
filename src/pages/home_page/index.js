import React from 'react';
import { connect } from 'react-redux';
import { Button } from "../../components";
import './style.less';

const HomePage = (props) => {
    // const updateStore = useUpdateStore({ type: types.HOME_UPDATE })

    return (
        <div className="home-page">
            <Button type='contained' title="hello" />
        </div>
    )
}

export default connect((store) => {
    return {
        home: store.home,
    };
})(HomePage);