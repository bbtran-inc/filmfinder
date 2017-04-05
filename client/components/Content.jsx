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
            <h4 className="inline-strong">Director: &nbsp;</h4><span>{props.director}</span>
          </div>
          <div className="plotSummary-item">
            <h4 className="inline-strong">Writer: &nbsp;</h4><span>{props.writer}</span>
          </div>
          <div className="plotSummary-item">
            <h4 className="inline-strong">Cast: &nbsp;</h4><span>{props.actors}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  poster: React.PropTypes.string,
  plot: React.PropTypes.string,
  director: React.PropTypes.string,
  writer: React.PropTypes.string,
  actors: React.PropTypes.string,
};
