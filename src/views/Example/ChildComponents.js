import React from "react";

class ChildComponents extends React.Component {
    state = {
        isShow: false,
    }

    handleShow = () => {
        this.setState({isShow: !this.state.isShow});
    }

    handleonClick = (item) => {
        this.props.deletePeople(item)
    }
    
    render() {
        let {arrayPeople} = this.props
        return (
           <>
                {this.state.isShow ? 
                    <button onClick={() => this.handleShow()}>Show</button>
                :
                <>
                    <div>{
                        arrayPeople.map((item, index) => {
                            return (
                                <div key={index}>{item.title} 
                                    <span style={{marginLeft: 5, cursor: 'pointer'}}
                                        onClick={() => this.handleonClick(item)}
                                    >x</span> 
                                </div>
                            )
                        })
                    }
                    </div>
                      
                    <button onClick={() => this.handleShow()}>Hide</button>
                </>
                }      
            </>  
        )
       
    }
}

export default ChildComponents;