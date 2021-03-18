import React from 'react'
import PropTypes from 'prop-types'

function ToDoItem({ todo, index }) {
    return (
        <li>
            <strong>{index + 1}</strong>
            {todo.task}
        </li>
    )
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default ToDoItem