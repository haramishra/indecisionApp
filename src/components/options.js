import React from "react";
import Option from "./Option"
const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget__title">Your Option</h3>
            <button
                onClick={props.remove}
                className="button button--link"
            >
                Remove All
        </button>
        </div>
        {props.options.length == 0 && <p className="widget__message">Please add item to get started!</p>}

        {
            props.options.map((item, index) => {
                return (
                    <Option
                        optionTitle={item}
                        key={item}
                        count={index+1}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                );
            })
        }

    </div>
);
export default Options;

