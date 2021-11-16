import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Chat from "./components/Chat/Chat";
import ChatContainer from "./components/Chat/ChatContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className='main-content'>
                    <Navigation/>
                    <div className='content'>
                        <Routes>
                            <Route path='/' element={<Profile
                                store={props.store}
                            />}/>
                            <Route path='/profile/*' element={<Profile
                                store={props.store}
                            />}/>
                            <Route path='/chat/*' element={<ChatContainer
                                store={props.store}
                            />}/>
                            <Route path='/news/*' element={<News/>}/>
                            <Route path='/music/*' element={<Music/>}/>
                            <Route path='/settings/*' element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
