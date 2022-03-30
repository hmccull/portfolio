import React from 'react';
// import FadeIn from 'react-fade-in';

function LoadingMain() {

    return (
        <div id='loading'>
        {/* <FadeIn
        transitionDuration={3000}> */}
            <img src='./hmLogo.svg' className="App-logo" alt="logo" />
        {/* </FadeIn> */}
        </div>
    )
}

export default LoadingMain;