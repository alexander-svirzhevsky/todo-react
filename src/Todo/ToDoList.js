import React from 'react'
import PropTypes from 'prop-types'
import ToDoItem from './ToDoItem'


const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function ToDoList(props) {
    return (
        <ul style={styles.ul}>
            { props.todoList.map((todo, index) => {
                return <ToDoItem todo={todo} key={todo.id} index={index}></ToDoItem>
            })}
        </ul>
    )
}

ToDoList.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ToDoList