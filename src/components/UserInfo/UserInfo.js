import React, { Component } from 'react';

class UserInfo extends Component {
    constructor(params) {
        super(params)

        this.state = {
            user: null
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.authed && this.state.user === null) { // user logged in
            // call api get user info
            this.setState({user: {name: "longvv", email: "longvv112@gmail.com"}});
        }
    }

    render() {
        const {user} = this.state
        if (!user) return null

        return (
            <div className='nav-link'>{user.name}</div>
        );
    }
}

export default UserInfo;