import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMovieQuote} from '../actions';


class Quotes extends Component {
    componentDidMount(){
        this.props.getMovieQuote();
    }
    render(){
        // this.props.log('Hello from movie quotes');
        return (
            <div>
                <h1 className="center">Movie Quote</h1>
                <h5>{this.props.quote}</h5>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        quote: state.quotes.movie
    }
}

export default connect(mapStateToProps,{
    getMovieQuote: getMovieQuote
})(Quotes);
    
