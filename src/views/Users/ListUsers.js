import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import './ListUsers.scss'

class ListUsers extends React.Component {

    state = {
        listUsers: []
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2')
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleClick = (user) => {
        this.props.history.push(`user/${user.id}`)
    }

    render() {
        let {listUsers} = this.state
        return (
            <>
                <div className="title">List User</div>
                <div className="list_users">
                    {
                        listUsers && listUsers.length > 0 &&
                        listUsers.map((user, index) => {
                            return (
                                <div className="user_item" key={user.id}
                                    onClick ={ () => {this.handleClick(user)}}
                                >{index+1} - {user.first_name} - {user.last_name}</div>
                            )
                        })
                    }
                </div> 
            </>
        )
    }
}

export default withRouter(ListUsers);