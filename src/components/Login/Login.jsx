import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'


export default function Login(props) {

    console.log(props);


    let [errorList, setErrorList] = useState([]);
    let [error, setError] = useState('');
    let [loading, setLoading] = useState(false);



    let [user, setUser] = useState({ email: '', password: '' });

    function getUser(e) {

        let myUser = { ...user };//Note
        myUser[e.target.name] = e.target.value;
        setUser(myUser);

    }


    async function formSubmit(e) {
        e.preventDefault();
        setLoading(true);
        let validattionResponse = validateRegisterForm();

        if (validattionResponse.error) {

            setErrorList(validattionResponse.error.details)
            setLoading(false);

        }
        else {
            let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signin`, user);
            if (data.message === 'success') {

                localStorage.setItem('userToken', data.token);
                props.getUserInfo();
                props.history.push('/home');
                setLoading(false);
            }
            else {
                setLoading(false);
                setError(data.message)
            }
        }



    }


    function validateRegisterForm() {
        let scheme = Joi.object({

            email: Joi.string().email({ tlds: { allow: ['com', 'net', 'org'] } }).required(),
            password: Joi.string().pattern(new RegExp('^[A-Z][a-z]{2,8}$')),

        });

        return scheme.validate(user, { abortEarly: false });
    }

    return (
        <div>

            <div className="w-75 mx-auto py-4">
                <h1>Login Now</h1>

                <form onSubmit={formSubmit}>

                    {error && <div className="alert alert-danger">{error}</div>}


                    {errorList.map((error, index) => index == 1 ? <div className="alert alert-danger p-2">invalid password</div> :
                        <div className="alert alert-danger p-2">{error.message}</div>)}


                    <div className='my-2'>

                        <label htmlFor="email">email</label>
                        <input onChange={getUser} type="email" className='form-control ' name="email" />
                    </div>

                    <div className='my-2'>

                        <label htmlFor="password">password</label>
                        <input onChange={getUser} type="password" className='form-control' name="password" />
                    </div>


                    <button type='submit' className='mt-3 btn btn-info'>
                        {loading ? <i className='fas fa-spinner fa-spin'></i> : 'login'}

                    </button>
                </form>
            </div>
        </div>
    )
}
