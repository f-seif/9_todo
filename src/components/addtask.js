import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {create} from '../todoSlice';

export function AddTask() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const NewTask = (e) => {
    e.preventDefault();
    if (value){
      dispatch(create({
        description: value
      }))
    }
  }
  return(
    <>
      <form onSubmit={NewTask} className="d-flex" name="">
        <input type="text" name="desc2" className="form-control" placeholder="Enter description" aria-label="" value={value} onChange={(event) => setValue(event.target.value)}/>
        <div className="modal-footer">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </>
  )
}
