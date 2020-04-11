import React from 'react';

function ContentButton(props) {
    return (
      <button className={props.default ? "selected" : ""} data-open-content={props.name} onClick={props.callbackFunction}>{props.name}</button>
    )
}

export default ContentButton;