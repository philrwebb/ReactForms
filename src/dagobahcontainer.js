import React from 'react';
import PlanetView from './planetview';

export default class DagobahContainer extends React.Component {
    state = {loading: true};

    componentDidMount() {
        fetch("https://swapi.co/api/planets/6")
            .then(res => res.json())
            .then(
                planet => this.setState({loading: false, planet }),
                error => this.setState({loading: false, error})
            );
    }

    render() {
        return <PlanetView {...this.state} />;
    }
}

