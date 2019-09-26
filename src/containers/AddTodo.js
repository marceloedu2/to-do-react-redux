import React from 'react'
import { connect } from 'react-redux'
import { FormGroup, InputForm, ButtonFrom } from '../assets/styles'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <FormGroup
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <InputForm ref={node => (input = node)} />
        <ButtonFrom type="submit">Add Todo</ButtonFrom>
      </FormGroup>
    </div>
  )
}

export default connect()(AddTodo)