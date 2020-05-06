import React from 'react';
import { GiPlayButton } from "react-icons/gi";
import { AiOutlineForm } from "react-icons/ai";
import { IoIosText } from "react-icons/io";
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render() {
        return(
            <div>
                <div className="home">
                    <h1>Sam Eskandar's Veer AI Application</h1>
                    <h3 style={{paddingTop: '40px'}}>Click on one of the 3 buttons below to be redirected to it's respective challenges</h3>
                </div>
                <div className="challenges">
                    <Link to="/button"><GiPlayButton className="icon1" size={60}/></Link>
                    <Link to="/form"><AiOutlineForm className="icon2" size={60}/></Link>
                    <Link to="/message"><IoIosText className="icon3" size={60}/></Link>
                </div>
            </div>
        )
    }
}

export default Home;