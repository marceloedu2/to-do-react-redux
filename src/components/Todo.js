import React from 'react'
import PropTypes from 'prop-types'
import { LiItem, HrefIcon } from '../assets/styles'
import { FiEdit, FiTrash2} from 'react-icons/fi'

const Todo = ({ onClick, completed, text }) => (
  <LiItem
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <HrefIcon>
      <a href="#"><FiEdit /></a>
      <a href="#"><FiTrash2 /></a>
    </HrefIcon>
  </LiItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo