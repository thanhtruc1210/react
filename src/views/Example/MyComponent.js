import React from 'react';
import AddComponent from './AddComponent';
import ChildComponents from './ChildComponents'

class MyComponent extends React.Component {
    
    state = {
        arrayPeople: [
            {id: '1', title: 'john', age: '20'},
            {id: '2', title: 'mark', age: '23'},
            {id: '3', title: 'jess', age: '24'}
        ],
    }

    addNewJob = (job) => {
        this.setState({arrayPeople: [...this.state.arrayPeople, job]})
        // console.log('Job', job)
    }

    deletePeople = (people) => {
        this.setState({arrayPeople: this.state.arrayPeople.filter(item => item.id !== people.id)})
        
    }

    render() {
        return (
             <>
                <AddComponent 
                    addNewJob={this.addNewJob}
                />
                <ChildComponents 
                    arrayPeople={this.state.arrayPeople}
                    deletePeople = {this.deletePeople}
                />
             </>
        );
    }
}

export default MyComponent