import {AddTask} from './addtask'

export function Nav() {
  return(
    <nav className="navbar navbar-expand-lg bg-light">
     <div className="container-fluid p-2">
      <AddTask className="m-2" />
     </div>
   </nav>
  )
}
