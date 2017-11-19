import React, { Component } from 'react'
import sanity from '../lib/sanity'

const query = `*[_type == "movie"] {
  _id,
  title,
}
`;

class MyMovie extends Component {
    constructor(props){
        super(props);

        this.state = {};
    }
    async componentDidMount() {
        console.log('mounting...');
        const movies = await sanity.fetch(query);
        this.setState({
            movies
        });

    }

    render() {
        const {movies} = this.state;

        if(movies){
            console.log(movies);
            return (
                <div>
                    <ul className="list">
                        {movies.map(movie => (
                            <li key={movie._id} className="list__item">
                                <a href={{pathname: '/movie', query: {id: movie._id}}}>
                                    <a>


                                        <h3>{movie.title}</h3>

                                    </a>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    Waiting.
                </div>
            )
        }

    }
}

export default MyMovie;
