import * as React from 'react';
import Login from "../auth/login.js";
import Home from '../components/Home.js';
import "./index.css";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import PhotoDump from '../components/PhotoDump.js';
import ConnectLaptop from '../components/ConnectLaptop.js'
import Games from '../components/Games.js';
import PublishWebsite from '../components/PublishWebsite.js';
import Task from '../components/Task.js';
import Form from '../components/Form.js';
function App() {
  const [user, setUser] = React.useState(null);
  const [authState, setAuthState] = React.useState(null)

  // React.useEffect(() => {
  //   const unSubscribeAuth = onAuthStateChanged(auth,
  //     async authenticatedUser => {
  //       if(authenticatedUser) {
  //         setUser(authenticatedUser.email)
  //         setAuthState('home');
  //       } else {
  //         setUser(null);
  //         setAuthState('login')
  //       }
  //     })

  //     return unSubscribeAuth;
  // }, [user])

  // if(authState === null) return <div className='font-bold text-center text-5xl'>loading...</div>
  // if(authState === null ) return <Login setAuthState={setAuthState} setUser={setUser}/>

  
  return(
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path = '/photodump' element= {<PhotoDump/>}></Route>
        <Route path = '/connectlaptop' element= {<ConnectLaptop/>}> </Route>
        <Route path = '/task' element= {<Task/>}> </Route>
        <Route path = '/games' element= {<Games/>}> </Route>
        <Route path = '/publishwebsite' element= {<PublishWebsite/>}> </Route>
        <Route path = '/form' element= {<Form/>}> </Route>
      </Routes>
    </Router>
  )
  
}

export default App;