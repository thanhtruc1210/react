import React from "react";
import {withRouter} from 'react-router'
import Color from "../HOC/Color"
import logo from '../../assets/images/tranh-ve-cute.jpg'
import './style.scss'
import {connect} from 'react-redux'

class Home extends React.Component {

    componentDidMount() {
        // setTimeout (() => {
        //      this.props.history.push('/todo')
        // }, 3000)
    }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user)
    }

    handleCreateUser = () => {
        this.props.addUserRedux()
    }

    render() {
        // console.log("state props: ", this.props.dataRedux)
        let listUsers = this.props.dataRedux
        return (
            <>
                <div>Home Page</div>
                <div>
                    <img src={logo} className="img-home"/>
                </div>
                {
                    listUsers && listUsers.length > 0 && 
                    listUsers.map((user, index) => {
                        return (
                            <div key={user.id}>
                                {index+1} &nbsp;
                                Name user: {user.name}&nbsp;
                                <span onClick={() => this.handleDeleteUser(user)} style={{cursor: "pointer"}}>x</span>
                            </div>
                        )
                    })
                }
                <button type="button" style={{marginBottom: '40px'}} onClick={() => this.handleCreateUser()}>Add users</button>
            </>
        )
    }
}

// export default withRouter(Home);

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({type: 'ADD_USER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
