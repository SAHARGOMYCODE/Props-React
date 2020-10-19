import React from "react";

const Handle = (props) => {
  return (
    <div>
      <button onClick={() => props.handleClick(props.name)}>ClickMe</button>
    </div>
  );
};

export default Handle;
