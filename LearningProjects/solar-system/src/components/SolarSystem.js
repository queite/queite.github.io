import React from 'react';
import PlanetList from './PlanetList';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <PlanetList />
      </div>
    );
  }
}

export default SolarSystem;
