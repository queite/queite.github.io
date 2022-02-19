import React from 'react';
import Missions from '../data/missions';
import MissionCard from './MissionCard';

class MissionsList extends React.Component {
  render() {
    return (
      <section>
        {
          Missions.map(({ name, year, country, destination }) => (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))
        }
      </section>
    );
  }
}

export default MissionsList;
