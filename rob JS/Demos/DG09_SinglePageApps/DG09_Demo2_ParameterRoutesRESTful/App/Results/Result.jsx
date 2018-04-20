import React from 'react';

const Result = props => (
  <li>{props.result.home} {props.result.homeScore} - {props.result.awayScore} {props.result.away}</li>
)

export default Result;
