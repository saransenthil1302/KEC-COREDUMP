import React from 'react'

const SignUpContainer = () => {
    return (
        <div className="form-container sign-up-container">
            <form className='form' action="#">
                {/* <section className='heading-container'> */}
                <h1 className='form-heading'>Create Account</h1>
                {/* </section> */}
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span className='form-span'>or use your email for registration</span>
                <input className='form-input' type="text" placeholder="Name" />
                <input className='form-input' type="email" placeholder="Email" />
                <input className='form-input' type="password" placeholder="Password" />
                <button className='form-button'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpContainer
