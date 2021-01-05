import React from 'react';
import { connect } from 'react-redux';
import './style.less';

const UsersPage = (props) => {
    // const updateStore = useUpdateStore({ type: types.USERS_UPDATE })

    return (
        <div className="users-page">
        </div>
    )
}

export default connect((store) => {
    return {
        users: store.users,
    };
})(UsersPage);