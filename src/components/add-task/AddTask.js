import React from 'react'
import PropTypes from 'prop-types'
import {Icon} from 'react-fa'

class AddTask extends React.Component{
    state = {
        content: ''
    }

    changeContent = (e) => {
    this.setState({
      content: e.target.value,
    })
  }

    onClickAdd = () => {
    this.props.onAddTask1(this.state.content)

    this.setState({
      content: '',
    })
  }

    render(){
        return (
            <div>
                <input
                        id="todo-content-input"
                        type="text"
                        value={this.state.content}
                        onChange={this.changeContent}
                />
                <button id='add-task'
                        disabled={!this.state.content}
                        onClick={this.onClickAdd}        
                >
                    <Icon name='plus'/>
                </button>
            </div>
        )
    }
}

AddTask.propTypes = {
    onAddTask1: PropTypes.func.isRequired,
}

export default AddTask