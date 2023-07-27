import React from 'react'

const SignInContainer = () => {
    return (
        <div className="form-container sign-in-container">
            <form className='form' action="#">
                <h1 className='form-heading'>Sign in</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span className='form-span'>or use your account</span>
                <input className='form-input' type="email" placeholder="Email" />
                <input className='form-input' type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button className='form-button'>Sign In</button>
            </form>
        </div>
    )
}

export default SignInContainer
