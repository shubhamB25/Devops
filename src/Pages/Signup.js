import React, { useState } from 'react'
import './Signup.css'
import logo from '../Assets/logo.png'
import FormInput from '../Components/FormInput/FormInput'
import { useForm } from 'react-hook-form'
import heroImage from '../Assets/heroImage.png'
import { useHistory } from 'react-router-dom'

const Signup = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: 'onBlur' })

    const history = useHistory()
    //const { screenWidth, signUpOrLogin, loading } = useSignupContext()
    const [login, setLogin] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const onSubmitHandler = (data) => {

        history.push('Devops/dashboard')
    }

    return (
        <>
            <nav className='signup-nav'>
                <div>
                    <img src={logo} alt='Hero' />
                </div>
            </nav>
            <main className={`signup-page ${ 'display-phone'}`}>
                <section
                    className='form-container margin-t-s'
                    style={{ marginLeft:  '10rem'  }}
                >
                    <h3>Welcome To Globiliti! </h3>
                    <h3>You Own Personal Dashboard</h3>
                    <p className='text margin-t-xs'>
                        {!login
                            ? 'create your school account'
                            : 'login to your school account'}
                    </p>
                    <form
                        className='form margin-t-s'
                        onSubmit={handleSubmit(onSubmitHandler)}
                    >
                        {!login && (
                            <>
                                <div className='form-actions'>
                                    <FormInput
                                        type='text'
                                        name='name'
                                        label={`what's your full name?`}
                                        reference={register('name', {
                                            required: {
                                                message: 'Name is required!',
                                                value: true,
                                            },
                                            minLength: {
                                                value: 4,
                                                message: 'Too short name!',
                                            },
                                        })}
                                        error={errors}
                                    />
                                </div>
                                <div className='form-action'>
                                    <FormInput
                                        label='Set Username'
                                        name='username'
                                        type='text'
                                        reference={register('username', {
                                            required: {
                                                message: 'Username is required!',
                                                value: true,
                                            },
                                            minLength: {
                                                message: 'Too short userName',
                                                value: 4,
                                            },
                                        })}
                                        error={errors}
                                    />
                                </div>
                            </>
                        )}

                        <div className='form-action'>
                            <FormInput
                                label='Email'
                                name='email'
                                type='email'
                                reference={register('email', {
                                    required: {
                                        message: 'Email is required!',
                                        value: true,
                                    },
                                })}
                                error={errors}
                            />
                        </div>
                        <div className='form-action'>
                            <FormInput
                                label={login ? 'Password' : 'Create Password'}
                                name='password'
                                type={showPassword ? 'text' : 'password'}
                                reference={register('password', {
                                    required: {
                                        message: 'Password must be provided!',
                                        value: true,
                                    },
                                    minLength: {
                                        value: 9,
                                        message: 'Weak password!',
                                    },
                                })}
                                error={errors}
                                showPassword={showPassword}
                                setShowPassword={setShowPassword}
                            />
                        </div>
                        {  (
                            <button className='btn transition-slow' >
                                {!login ? 'Create Account' : 'Login'}
                            </button>
                        )}
                        <p className='login'>
                            {!login ? 'Already a user?' : `Don't have account?`}
                            <span onClick={() => setLogin((prev) => !prev)}>
                                {!login ? ' Login' : ' Signup'}
                            </span>
                        </p>
                    </form>
                </section>
                {  (
                    <div className='hero-image'>
                        <img src={heroImage} alt={'Hero'} />
                    </div>
                ) }
            </main>
        </>
    )
}

export default Signup
