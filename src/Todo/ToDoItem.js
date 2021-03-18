import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginBottom: '1rem'
    },
    button: {
        backgroundColor: 'red',
        border: 'none',
        color: '#fff',
        borderRadius: '5px',
        cursor: 'pointer'
    }
}

function ToDoItem({ todo, index, onChange }) {
    return (
        <li style={styles.li}>
            <span>
                <input type="checkbox" onChange={() => {
                    onChange(todo.id)
                }} />
                &nbsp;
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.task}
            </span>
            <button style={styles.button}>&times;</button>
        </li>
    )
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default ToDoItem