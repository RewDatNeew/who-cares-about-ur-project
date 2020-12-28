import React from 'react';
import { connect } from 'react-redux';
import './style.less';

const HomePage = (props) => {
    // const updateStore = useUpdateStore({ type: types.HOME_UPDATE })

    return (
        <div className="home-page">
            FUCK YOU
        </div>
    )
}

export default connect((store) => {
    return {
        home: store.home,
    };
})(HomePage);