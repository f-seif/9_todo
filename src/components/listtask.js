import React from 'react';
import {Task} from './task';
import {useSelector} from 'react-redux';

export function ListTask() {
  const todos = useSelector((state) => state.todos);
  return(
    <ul className="list-group">
      <li className="list-group-item">
        {
          todos.map((el, i) => <Task key={i} id={el.id} status={el.status} description={el.description}/>)
        }
      </li>
    </ul>
  )
}
