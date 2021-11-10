import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Profile from './components/Profile';


function App() {

    return (
        <div className="App">
            <Header/>
            <div className='main-content'>
                <Navigation/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
