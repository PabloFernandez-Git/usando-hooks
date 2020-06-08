import React, { Component } from 'react'

class App extends Component {

    state = { number: 10 }

    handleIncrement = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    handleReset = () => {
        this.setState({
            number: 0
        })
    }

    render() {
        return (
            <>
                <h1>Number: {this.state.number}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
                <button onClick={this.handleReset}>Reset</button>
            </>
        );
    }
}

App.defaultProps = {
    number: 0
}


export default App;

/*
Hooks

Hooks son una nueva característica en React 16.8. Estos te permiten usar el estado y otras características de React sin escribir una clase.

Es una forma de trabajar mucho mas comoda porque no solo escribimos menos codigo sino que es mas intuitivo y facil de depurar.

Las clases siguen estando disponibles pero se recomienda para los nuevos desarrollos utilizar Hooks.

Los conceptos sobre ciclo de vida y props siguen funcionando exactamente igual.
Se utilizan de una forma distinta pero sus conceptos no cambian.


*/