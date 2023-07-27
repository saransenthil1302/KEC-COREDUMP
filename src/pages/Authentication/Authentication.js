import React, { useEffect, useState } from 'react';
import { getCall } from '../../api/axios';
import { useAlert } from 'react-alert';

// Internal imports
import Logo from '../../components/Logo';


// Style sheet imports
import '../../style-sheets/Authentication.scss'

// REGEX Declaration
const EMAIL_REGEX = /^([a-z]+\.+\w+(@kongu\.edu))$/;
const ROLLNUM_REGEX = /^(\d{2}[A-Z|a-z]{2,3}\d{3})$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Authentication = () => {

    const alert = useAlert();
    // Declaring initial Values
    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        rollNo: "",
        year: null,
        otp: null,
        role: "ADMIN"
    }

    // Declaring hooks for Sign up page
    const [signupValues, setSignupValues] = useState(initialValues);
    const [isLoad, setIsLoad] = useState(false);
    const [validEmail, setValidEmail] = useState(false);


    // Declaring Submit condition
    const [validMatch, setValidMatch] = useState(true);



    // To change the input values
    const handleInputChange = (e) => {
        //const name = e.target.name 
        //const value = e.target.value 
        const { name, value } = e.target;

        setSignupValues({
            ...signupValues,
            [name]: value,
        });
    };

    // To validate password and confirm password
    useEffect(() => {
        setValidMatch(signupValues.password === signupValues.confirmPassword);
    }, [signupValues.password, signupValues.confirmPassword])

    // To send Email
    const sendEmail = (e) => {
        e.preventDefault();
        if (EMAIL_REGEX.test(signupValues.email)) {
            try {

                const responce = getCall(`/generate-otp?email=${signupValues.email}`)
                if (responce.message === signupValues.email) {
                    setValidEmail(true);
                    alert.success("Your mail id is verified :)")
                }
                else {
                    alert.error(responce.message)
                }
            }
            catch (err) {
                alert.error(err.message)

            }
        }
        else {
            alert.error("Enter valid kongu mail Id")
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert.show("jeichitom maara")
    }


    return (
        <>

            <main className='main-container'>
                {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
                <div className="main">
                    <input type="checkbox" id="chk" aria-hidden="true" />

                    <div className="signup-form-container">

                        <form onSubmit={sendEmail}>
                            <label htmlFor='chk' aria-hidden="true"><Logo />Sign up</label>
                            <section className='input-wrapper'>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="User name*"
                                    required=""
                                    value={signupValues.name}
                                    onChange={handleInputChange} />
                                <input
                                    type="text"
                                    name="rollNo"
                                    placeholder="RollNumber*"
                                    required=""
                                    value={signupValues.rollNo}
                                    onChange={handleInputChange}
                                    title="roll number should be in YY-DEPT-ROLLNUM " />

                            </section>
                            <section className='input-wrapper'>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Kongu Mail-ID*"
                                    required=""
                                    value={signupValues.email}
                                    onChange={handleInputChange}
                                    title="Only kongu mail ids are accepted"
                                />
                                <section className='input-wrapper'>
                                    <input
                                        type="number"
                                        name="otp"
                                        placeholder="OTP*"
                                        required=""
                                        value={signupValues.otp}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        className='year'
                                        type="number"
                                        name="year"
                                        placeholder="year"
                                        required=""
                                        value={signupValues.year}
                                        onChange={handleInputChange}
                                        min={1}
                                        max={4}
                                    />
                                </section>
                            </section>
                            <section className='input-wrapper'>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password*"
                                    required=""
                                    value={signupValues.password}
                                    onChange={handleInputChange}
                                    title="8 to 24 characters.
                                Must include uppercase and lowercase letters,
                                a number and a special character.
                                Allowed special characters: ? @ # $ %"
                                />
                                <input
                                    type="text"
                                    name="confirmPassword"
                                    placeholder="Confirm Password*"
                                    required=""
                                    value={signupValues.confirmPassword}
                                    onChange={handleInputChange}
                                    title="Enter the password again"


                                />
                            </section>

                            <button>Sign up</button>
                        </form>
                    </div>

                    <div className="login-form-container">
                        <form>
                            <label htmlFor="chk" aria-hidden="true">Login</label>
                            <input type="email" name="email" placeholder="Email" required="" />
                            <input type="password" name="pswd" placeholder="Password" required="" />
                            <button>Login</button>
                        </form>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Authentication;