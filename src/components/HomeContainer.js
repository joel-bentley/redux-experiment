import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNewTime } from '../actions/actions';

function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <p>Current time: {props.currentTime}</p>
      <Link to="/about">Go to About</Link>
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
  return { updateTime: () => dispatch(fetchNewTime()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
