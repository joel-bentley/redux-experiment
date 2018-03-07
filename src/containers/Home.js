import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions as currentTimeActions } from '../reducers/currentTime';

function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <p>Current time: {props.currentTime}</p>
      <p>
        <Link to="/about">Go to About</Link>
      </p>
      <button onClick={props.updateTime}>Update Time</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentTime: state.time.currentTime,
  };
}

function mapDispatchToProps(dispatch) {
  return { updateTime: () => dispatch(currentTimeActions.fetchNewTime()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
