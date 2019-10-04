import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./options";
import AddOption from "./AddOptions";
import OptionModal from "./OptionModal";

const title = "indecision";

class Indecision extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }));
    };

    addOption = (option) => {
        console.log(option);
        if (!option) {
            return "Please Enter A Valid Value"
        } else if (this.state.options.indexOf(option) > -1) {
            return `"${option}" Already Exists`;
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    };

    whatShouldIDo = () => {
        let item = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[item];
        console.log(option);
        this.setState(() => ({ selectedOption: option }));

    };

    handleDeleteOption = (options) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((item) => item !== options)
            }
        })
    };

    closeModal = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };

    componentDidMount() {
        const json = localStorage.getItem("options");
        const option = JSON.parse(json);

        if (option) {
            this.setState(() => ({ options: option }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    render() {
        return (
            <div>
                <Header title={title} />
                <div className="container">
                    <Action
                        rand={this.whatShouldIDo}
                        disable={this.state.options.length > 0}
                    />

                    <div className="widget">
                        <Options
                            options={this.state.options}
                            remove={this.handleRemoveAll}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            add={this.addOption}
                        />
                    </div>

                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    closeModal={this.closeModal}
                />
            </div>
        );
    }
}


export default Indecision;