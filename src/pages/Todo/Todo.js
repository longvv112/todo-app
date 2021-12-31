import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import withLoading from '../../hoc/withLoading';
import useFetchData from '../../hook/useFetchData';
import { TodosService } from '../../services/todos';

const TodoInfo = ({todo}) => {
    return (
        <h1>{todo.title}</h1>
    )    
}

const TodoInfoWithLoading = withLoading(TodoInfo)

const Todo = (props) => {
    // const params = useParams()
    const todoId = props.match.params.id
    const {loading, data: todo} = useFetchData(`/todos/${todoId}`)

    return (
        <div>
            {/* Todo details */}
            <TodoInfoWithLoading todo={todo} loading={loading} />
        </div>
    );
};

export default Todo;