import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class PlanetList extends React.Component {
  render() {
    return (
      <section>
        {
          Planets.map(({ name, image }) => (
            <PlanetCard
              planetName={ name }
              planetImage={ image }
              key={ name }
            />))
        }
      </section>
    );
  }
}

export default PlanetList;
