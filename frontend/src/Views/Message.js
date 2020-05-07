import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import axios from 'axios';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            isCorrect: false,
            isAlreadyThere: true,
            opacityTrue: '0',
            opacityFalse: '0',
            opacitySubmitted: '0',
            transition: 'opacity 0.75s ease-in'
        }
    }

    // handles the GET request that pulls the keyword from the REST API to update state
    componentDidMount() {
        // API link
        fetch('http://127.0.0.1:8000/api/')
            .then(res => res.json())
            .then(result => {
                if (result) {
                    result.forEach(item => {
                        // sets only the most recent keyword (for purposes of setting new keyword) to the keyword state
                        this.setState({
                            keyword: item.keyword
                        });
                    })
                }
                else {
                    this.setState({
                        isAlreadyThere: false
                    })
                }
            });
        console.log(this.state.keyword)
    };

    // checks if the submitted message was the same as the one stored in the REST API
    handleFormSubmit = (e) => {
        e.preventDefault();
        const guessedWord = e.target.elements.message.value;
        if (guessedWord === this.state.keyword) {
            this.setState({
                // setting opacity for message displays
                // in this case, guess was right, so display the respective message
                opacityTrue: '1',
                opacityFalse: '0',
                opacitySubmitted: '0'
            })
        }
        else {
            this.setState({
                // setting opacity for message displays
                // in this case, guess was wrong, so display the respective message
                opacityTrue: '0',
                opacityFalse: '1',
                opacitySubmitted: '0'
            })
        }
    };

    // extra step to set the value yourself
    handleChange = async (e) => {
        e.preventDefault();

        // sets submitted message to constant 'change'
        const change = e.target.elements.change.value;

        this.setState({
            // display the submitted message
           opacitySubmitted: '1'
        });

        // post request made to REST API
        return axios.post('http://127.0.0.1:8000/api/list-create/', {
                name: 'noname',
                email: 'noemail@email.com',
                phone_number: 0,
                keyword: change
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
                    <h1>A Prompt is Written Below</h1>
                    <br/>
                    <h3>Input the correct message!</h3>
                    <br/>
                    <p>What is my full name?</p>
                </div>
                <div className="contact-form" style={{paddingBottom: '0'}}>
                    <form action="" method="post" onSubmit={e => this.handleFormSubmit(e)}>
                        <input name="message" className="form-control" type="text" placeholder="Enter the message here..."/>
                    </form>
                </div>
                {/*only to display on correct guess*/}
                <div className="guessed" style={{opacity: this.state.opacityTrue, transition: this.state.transition, paddingTop: '-20px'}}>
                    <h3>You guessed correctly! How'd you know?</h3>
                </div>
                {/*only to display on incorrect guess as well as give answer*/}
                <div className="guessed" style={{opacity: this.state.opacityFalse, transition: this.state.transition}}>
                    <h3>Tough luck! Hint: the answer is <i>{this.state.keyword}</i></h3>
                </div>
                <div style={{paddingTop: '50px'}}>
                    <h3 style={{display: 'flex', justifyContent: 'center'}}>If you want, you can even set the word yourself</h3>
                    <div className="contact-form">
                        <form action="" method="post" onSubmit={e => this.handleChange(e)}>
                            <input name="change" className="form-control" type="text" placeholder="Enter the message here..."/>
                        </form>
                    </div>
                </div>
                {/*only to display on submit*/}
                <div className="guessed" style={{opacity: this.state.opacitySubmitted, transition: this.state.transition}}>
                    <h3>Submitted! Now just refresh the page and retry your guess!</h3>
                </div>
            </div>
        )
    }
}

export default Message;