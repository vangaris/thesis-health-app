import React from 'react'
import FormInput from '../form-input/form-input.component'
import './sing-up.style.scss'
import CustomButtom from '../../components/custom-button/custom-button.component'

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match")
            return
        }

        try {
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {

        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }



    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'> I do not have an account </h2>
                <span> sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>

                    <FormInput
                        name='displayName'
                        type='text'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required>
                    </FormInput>
                    <FormInput
                        name='email'
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                        label='email'
                        required>
                    </FormInput>
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        onChange={this.handleChange}
                        label='password'
                        required>
                    </FormInput>
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm password'
                        required>
                    </FormInput>

                    <CustomButtom type='onSubmit'> sign up</CustomButtom>
                </form>
            </div>
        )
    }
}

export default SignUp