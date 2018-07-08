import React from 'react';

class PlanetView extends React.Component{
    renderLoading() {
        return <div>Loading . . .</div>;
    }

    renderError() {
        return <div>I'm sorry! please try again.</div>;
    }

    renderPlanet() {
        const {name, climate, terrain } = this.props.planet;
        return (
            <div>
                <h2> {name} </h2>
                <div>Climate: {climate}</div>
                <div>Terrain: {terrain}</div>
            </div>
        );
    }

    render() {
        if (this.props.loading) {
            return this.renderLoading();
        } else if (this.props.planet) {
            return this.renderPlanet();
        } else {
            return this.renderError();
        }
    }
}

export default PlanetView;