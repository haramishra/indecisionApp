import React from "react";

const Action = (props) => (
    <div>
        <button
            disabled={!props.disable}
            onClick={props.rand}
            className="big-button"
        >What should I do?
        </button>
    </div>
);

export default Action;