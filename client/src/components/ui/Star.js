import React, { Component } from 'react';

class Star extends Component {
  render() {
    const { value, name } = this.props;
    const percent = `${parseInt(value * 100)}%`;
    console.log(value, percent);
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id={name}>
            <stop offset={percent} stopColor="#FFEB3B" />
            <stop offset={percent} stopColor="transparent" />
          </linearGradient>
        </defs>
        <g style={{ fill: `url(#${name})` }}>
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            stroke="#333"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </g>
      </svg>
    );
  }
}

export default Star;