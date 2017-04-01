import React from 'react';

export const Content = (props) => {
  return (
    <div className="mainContentWithPoster">
      <div className="movieImg-wrapper">
        <img className="movieImg" alt="" src={props.poster} />
      </div>
      <div className="plotSummary-wrapper">
        <div className="plotSummary">
          <div className="plotSummary-text">
            {props.plot}
          </div>
          <div className="plotSummary-item">
            <h4 className="inline-strong">Director:</h4> {props.director}
          </div>
          <div className="plotSummary-item">
            <h4 className="inline-strong">Writer:</h4> {props.writer}
          </div>
          <div className="plotSummary-item">
            <h4 className="inline-strong">Cast:</h4> {props.actors}
          </div>
        </div>
      </div>
    </div>
  );
}
