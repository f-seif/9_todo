import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../todoSlice';

export function Task({id, status, description}) {
  const dispatch = useDispatch();
  const handleCompleteClick = () => {
    dispatch(toggleComplete({id:id, status:!status}));
  }
  const handleDeleteClick = () => {
    dispatch(deleteTodo({id:id}))
  }
  return(
    <div className="d-flex">
      <input type="checkbox" checked={status} onChange={handleCompleteClick} />
      <p className="p-2 mb-0 ms-2 flex-grow-1">{description}</p>
      <button type="button" className="btn ms-2 flex-grow-0" onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}
