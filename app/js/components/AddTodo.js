import React from 'react';

import * as TodoActions from '../actions/TodoActions';

export default class AddTodo extends React.Component {
    render() {
        const { addTodo } = this.props;

        return (
            <div>
                <button onClick={addTodo}>Add Todo</button>
            </div>
        );
    }
}
