import React from 'react'

const OverlayContainer = () => {
    return (
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1 className='form-heading'>Welcome Back!</h1>
                    <p className='from-para'>
                        To keep connected with us please login with your personal info
                    </p>
                    <button className=" ghost" id="signIn">Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1 className='form-heading'>Hello, Friend!</h1>
                    <p className='form-para'>Enter your personal details and start journey with us</p>
                    <button className=" ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default OverlayContainer