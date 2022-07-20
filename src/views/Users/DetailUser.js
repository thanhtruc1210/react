import React from "react";
import { withRouter } from "react-router-dom"
import axios from "axios";
import './DetailUser.scss'

class DetailUser extends React.Component {

    state = {
        users: [],
    }

    async componentDidMount(){
        if( this.props.match && this.props.match.params){
            let id = this.props.match.params.id;
            let data = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                users: data && data.data ? data.data.data : []
            })
        }
    }

    handleBackClick = () => {
        this.props.history.push('/user')
    }

    render() {
        let {users} = this.state;
        return(
            <>
                <div>First name: {users.first_name}</div>
                <div>Last name: {users.last_name}</div>
                <div>email: {users.email}</div>
                <img src={users.avatar}/>
                <button 
                    className="button_back"
                    type="button"
                    onClick={() => this.handleBackClick()}
                >Back</button>
            </> 
        )
    }
}

export default withRouter(DetailUser);