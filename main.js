class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        const json = localStorage.getItem("count");
        const count = JSON.parse(json);
            this.setState(() => ({count}))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count != this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem("count", json);
            console.log("updating");
        }
    }

    handlePlusOne() {
        this.setState((previsuState) => {
            return {
                count: previsuState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((previsuState) => {
            return {
                count: previsuState.count - 1
            };
        });
    }

    handleReset() {
        console.log("reset");

        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handlePlusOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter count={5} />, document.getElementById("item"));

// let dv = document.getElementById("item");
// // conditional rendering in react

// // let info = {
// //     name: "Hara",
// //     age: 20,
// //     place: "bpt"
// // };

// // let checkPlace = () => {
// //     if (info.place == "hyd"){
// //         return <p>nice you live in {info.place}</p>
// //     } else {
// //         return <p>you live else were in {info.place}</p>
// //     }

// // }

// // let templete = (
// //     <div>
// //     <h1>Name: {info.name} </h1>
// //     {info.age >= 18 && <p>You are adult</p>}
// //     {checkPlace()}
// //     </div>
// // );

// //event in react

// let count = 0;

// let plusOne = () => {
//     count++;
//     appRender();
// }

// let minusOne = () => {
//     count--;
//     appRender();
// };

// let reset = () => {
//     count = 0;
//     appRender();
// }

// console.log(count)



// const appRender = () => {
//     let templete = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button id="butn" onClick={plusOne}>+1</button>
//         <button id="butn" onClick={minusOne}>-1</button>
//         <button id="butn" onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templete, dv);
// }

// appRender();