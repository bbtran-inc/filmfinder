import React, { Component } from 'react';
// import { connect } from 'react-redux';

export const TitleBar = (props) => {
  return (
    <div className="titleBar">
      <div className="favorite"></div>
      <div className="title-wrapper">
        <h3 className="title-header">{props.title}</h3>
        <div className="subtext-wrapper">
          <ul className="subtext-list">
            <li className="subtext-list-item">{props.rated}</li>
            <li className="subtext-list-item">{props.runtime}</li>
            <li className="subtext-list-item">{props.genre}</li>
            <li className="subtext-list-item">{props.released}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
