import React from 'react';

class AddComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }
    handleChangeFirstName = (e) => {
        this.setState({ firstName: e.target.value });
    }

    handleChangelastName = (e) => {
        this.setState({ lastName: e.target.value });
    }

    handleSubmit = (e) => {
        // console.log(this.state)
        this.props.addNewJob({
            id: Math.random(),
            title: this.state.firstName,
            age: this.state.lastName
        })
        this.setState({ firstName: '', lastName: '' });
        e.preventDefault();
    }
        
    render() {
        return (
            <form>
                <label htmlFor="fname">First name:</label><br />
                <input type="text" value={this.state.firstName}
                    onChange = {(e) => this.handleChangeFirstName(e)}
                /><br />
                <label htmlFor="lname">Last name:</label><br />
                <input type="text"
                    value={this.state.lastName} 
                    onChange = {(e) => this.handleChangelastName(e)}
                /><br />
                <input type="submit" value="Submit"
                    onClick={(e) => this.handleSubmit(e)}
                ></input>
            </form>
        )
    }
}

export default AddComponent