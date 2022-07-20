import React from "react";
import Color from "../HOC/Color"
import './Todo.scss'

class TodoList extends React.Component {
    render() {
        return (
            <div>This is TodoList</div>
        )
    }
}

export default Color(TodoList)