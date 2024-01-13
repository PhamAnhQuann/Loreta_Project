import React from 'react';
import Login from './Login/index';
import HomepageIntroduce from './IntroducingContainerPage/HomePageIntroduce/index'
import './app.css'
function App() {
    return (
        <div className='content'>
            {/* <Login /> */}
            <HomepageIntroduce />
        </div>
    )
}

export default App