import React from 'react'
import PropTypes from 'prop-types'

class TaskItem extends React.Component{

    render(){
        return (
            <div>
                <input className="checkbox" type="checkbox" checked={this.props.task.isAble} onChange={() => {this.props.onToggleTask(this.props.task.id)}}/> 
                <span>{this.props.task.title}</span> 
            </div>
        )}
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
    onToggleTask: PropTypes.func.isRequired,
}

export default TaskItem