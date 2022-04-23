import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

//Lazy loads
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs'
                               element={
                                   <Suspense fallback={<Preloader/>}>
                                       <DialogsContainer/>
                                   </Suspense>
                               }/>
                        <Route path="/profile/*"
                               element={
                                   <Suspense fallback={<Preloader/>}>
                                       <ProfileContainer/>
                                   </Suspense>
                                   }/>
                        <Route path="/profile/:userId"
                               element={
                                   <Suspense fallback={<Preloader/>}>
                                       <ProfileContainer/>
                                   </Suspense>
                               }/>
                        <Route path="/login"
                               element={<Login/>}/>
                        <Route path="/news"
                               element={<News/>}/>
                        <Route path="/music"
                               element={<Music/>}/>
                        <Route path="/settings"
                               element={<Settings/>}/>
                        <Route path="/users"
                               element={
                                   <Suspense fallback={<Preloader/>}>
                                       <UsersContainer/>
                                   </Suspense>
                               }/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp}) (App);
