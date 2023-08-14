import './App.css'
import { Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
// import { ClassNames } from '@emotion/react';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Route path="/" component={Homepage} exact></Route>
      <Route path="/chats" component={Chatpage}></Route>
    </div>
  );
}

export default App;
