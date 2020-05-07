import React from 'react';
import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacitySubmitted: '0',
            transition: 'opacity 0.75s ease-in'
        }
    }

    // asynchronous function to handle form submission to REST API
    handleFormSubmit = async (e) => {
        e.preventDefault();

        // on submit get each of the input values
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const phone = e.target.elements.phone.value;

        // simply to display the submit message once submitted
        this.setState({
            opacitySubmitted: '1'
        });

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
                <div className="guessed" style={{transition: this.state.transition, opacity: this.state.opacitySubmitted}}>
                    <h3>Your info was submitted and the database was updated.</h3>
                    <br/>
                    <p>To see the database and REST API updating, check out the video of me going through the challenge,</p>
                    <br/>
                    <p>Link in the Github Repository README and <a href="https://vimeo.com/415774581">here</a></p>
                    <br/>

                </div>
            </div>
        )
    }
}

export default Form;