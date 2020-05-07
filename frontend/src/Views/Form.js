import React from 'react';
import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // asynchronous function to handle form submission to REST API
    handleFormSubmit = async (e) => {
        e.preventDefault();

        // on submit get each of the input values
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const phone = e.target.elements.phone.value;

        console.log(name);
        console.log(email);
        console.log(phone);

        // post to /api/list-create/
        return axios.post('http://127.0.0.1:8000/api/list-create/', {
            name: name,
            email: email,
            phone_number: phone
        })
            .then(res => console.log(res))
            .catch(error => console.error(error))
    };

    render() {
        return(
            <div>
                <Link to="/">
                    <FaHome className="button" size={40} style={{position: 'absolute', top: '40px', left: '-600px'}}/>
                </Link>
                <div className="form-header">
                    <h1>A Simple Contact Form, Nothing Special</h1>
                    <br/>
                    <p>Just enter the info and hit submit when completed to upload the data in a PostgreSQL table</p>
                </div>
                <div className="contact-form">
                    <form id="contact-form" method="post" action onSubmit={e => this.handleFormSubmit(e)}>
                        <input name="name" type="text" className="form-control" placeholder="Your Name" required/>
                        <br/>
                        <input name="email" type="email" className="form-control" placeholder="Your Email" required/>
                        <br/>
                        <input className="form-control" type="number" name="phone" placeholder="Enter your phone number" required/>
                        <br/>
                        <input type="submit" className="form-control submit" value="SEND INFO"/>
                    </form>
                </div>
                {/*<div className="form">*/}
                {/*    <form action="">*/}
                {/*        <input type="text" name="name" placeholder="Enter your full name" required/>*/}
                {/*        <input type="email" name="email" placeholder="Enter your email" required/>*/}
                {/*        <input type="number" name="phone_number" placeholder="Enter your phone number" required/>*/}
                {/*    </form>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default Form;