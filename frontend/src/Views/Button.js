import React from 'react';
import { GiPlayButton } from "react-icons/gi";
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Card from "../Components/Card";

class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            opacity: '0',
            display: ''
        }
    }

    // trivial solution using over simplified API (essentially just one key and value)
    getPhoto = () => {
        fetch("https://random.dog/woof.json")
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        photo: result.url,
                    })
                }
            );
        console.log(this.state)
    };

    // used solution, with more interactive and involved API
    getFilms = () => {
        // get json file / data for all studio Ghibli films
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(
                (result) => {
                    // API returns on large JSON object, use forEach to iterate through each movie and get required data
                    let allMovies = [];
                    result.forEach( item => {
                        // create movie object of each iteration
                        let movieToAdd = {
                            id: item.id,
                            title: item.title,
                            description: item.description,
                        };
                        if (movieToAdd) {
                            allMovies.push(movieToAdd)
                        }
                        // add to movies array by setting state
                        this.setState({
                            movies: allMovies,
                            display: '',
                            opacity: '1'
                        })
                    })
                }
            );

        // check that the array has been populated with the correct data, aka the API call works
        console.log(this.state.movies)
    };

    render() {
        return(
            <div>
                <Link to="/">
                    <FaHome className="button" size={40} style={{position: 'absolute', top: '40px', left: '-600px'}}/>
                </Link>
                <div className="button-page" style={{paddingTop: '15%'}}>
                    <h1>A Simple Button, What Will it Do?</h1>
                    <br/>
                    <h3 style={{paddingBottom: '40px'}}>Click on it to find out!</h3>
                    <div className="button" onClick={this.getFilms}>
                        <GiPlayButton size={60} />
                    </div>
                </div>
                <div style={{display: this.state.display, opacity: this.state.opacity, transition: 'opacity 1s ease-in'}}>
                    {/*This Card Component simply takes in the movies array as a parameter and displays all the films from the API*/}
                    <Card movies={this.state.movies}  />
                </div>
            </div>
        )
    }
}

export default Button;