import React from "react";

class AddOption extends React.Component {
    state ={
        error: undefined
    }
   

    handleAddOption = (e) => {
        e.preventDefault();
        const text = e.target.elements.addOption.value.trim();
        const error = this.props.add(text);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.addOption.value = "";

        }

    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption} >
                    <input type="text" className="add-option__input" name="addOption" placeholder="write whatever you want"></input>
                    <button className="button">Add Options</button>
                </form>
            </div>
        );
    }
}

export default AddOption;