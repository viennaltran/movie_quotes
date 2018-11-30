import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {userSignOut} from '../actions';

class Nav extends Component {
    
    renderLinks(){
        const { auth, signOut} = this.props;

        if(auth) {
            return (
                <Fragment>
                <li>
                    <Link to="/secret-list">Secret List</Link>
                </li>
                <li>
                    <Link to="/quotes">Quotes</Link>
                </li>
                <li>
                    <button onClick={signOut} className="btn yellow darken-2">Sign Out</button>
                </li>
                </Fragment>
            );
        }

            return (
                <Fragment>
                    <li>
                        <Link to="/sign-in">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/sign-up">Sign Up</Link>
                    </li>
                </Fragment>
            );
    }

    render(){
        const navStyle ={
            padding:'0 8px'
        }

        // console.log('User Auth:', this.props.auth);

        return(
            <nav style={navStyle} className="orange darken-5">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Movie Quotes!</Link>
                
                <ul className="right">
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/about">About</Link>
                    </li>
                    <li>
                        <Link to="/public-list">Public List</Link>
                    </li>
                    
                    {this.renderLinks()}
                </ul>
                </div>
            </nav>
            
        );
    }
}

function mapStateToProps(state){
    return {
        auth: state.user.auth 
    }
}

export default connect(mapStateToProps, {
    signOut:userSignOut
}) (Nav);