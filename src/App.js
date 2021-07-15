import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Andrew, edit <code>src/App.js</code> and save to reload!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = (props) => {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <Navbar state={props.state.sidebar}/>
              <div className='app-wrapper-content'>
                  <Route path='/dialogs'
                         render={ () => <Dialogs state={props.state.dialogsPage}/> } />
                  <Route path='/profile'
                         render={ () => <Profile state={props.state.profilePage}
                                                 addPost={props.addPost}/> } />
                  <Route path='/news' render={ () => <News/> } />
                  <Route path='/music' render={ () => <Music/> } />
                  <Route path='/settings' render={ () => <Settings/> } />


                  {/*<Route path='/dialogs' component={Dialogs} />*/}
                  {/*<Route path='/profile' component={Profile}/>*/}
                  {/*<Route path='/news' component={News}/>*/}
                  {/*<Route path='/music' component={Music}/>*/}
                  {/*<Route path='/settings' component={Settings}/>*/}
              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
