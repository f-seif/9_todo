import {Nav} from './components/nav'
import {ListTask} from './components/listtask'

function App() {
  return (
    <>
      <Nav />
      <div className="p-2">
        <ListTask />
      </div>
    </>
  );
}

export default App;
