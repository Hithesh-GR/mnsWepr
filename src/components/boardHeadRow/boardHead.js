import React from "react";
import PropTypes from "prop-types";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const BoardHead = props => {
  let minutes = Math.floor(props.time / 60);
  let formattedSeconds = props.time - minutes * 60 || 0;

  formattedSeconds =
    formattedSeconds < 10 ? `0${formattedSeconds}` : formattedSeconds;
  let time = `${minutes}:${formattedSeconds}`;
  let status =
    props.status === "running" || props.status === "waiting" ? (
      <CheckCircleIcon/>
    ) : (
      <CancelIcon/>
    );
  return (
    <div className="board-head" style={{ backgroundColor: "lightgray" }}>
      <div className="flag-count">{props.flagsUsed}</div>
      <button className="reset" onClick={props.reset}>
        {status}
      </button>
      <div className="timer">{time}</div>
    </div>
  );
};

BoardHead.propTypes = {
  time: PropTypes.number.isRequired,
  flagsUsed: PropTypes.number.isRequired
};

export default BoardHead;
