import React from 'react';

const Result = ( { result }) => (
      <li>{result.home} {result.homeScore} - {result.awayScore} {result.away}</li>
)

export default Result;
