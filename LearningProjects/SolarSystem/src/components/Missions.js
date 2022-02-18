import React from 'react';
import MissionsList from './MissionsList';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" />
        <MissionsList />
      </div>
    );
  }
}

export default Missions;
