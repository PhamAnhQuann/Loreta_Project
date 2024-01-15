import React from 'react';
import Login from './Login/index';
import HomepageIntroduce from './IntroducingContainerPage/HomePageIntroduce/index'
import Menu from './Menu/MenuIntro/index'
import MenuOption from './Menu/MenuRoute/index'
import './app.css'
function App() {
    return (
        <div className='content'>
            {/* <Login /> */}
            {/* <HomepageIntroduce /> */}
            <Menu />
            <MenuOption />
        </div>
    )
}

export default App