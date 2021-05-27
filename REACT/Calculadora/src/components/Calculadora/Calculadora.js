import React, {Component} from 'react';
import Boton from './Boton';
import MatrizBotones from './MatrizBotones';
import './css/calculadora.css';
import Pantalla from './Pantalla';

class Calculadora extends Component {
    constructor() {
        super();
        this.state = { data: ''}
    }

    calculate = () => {
        try {
            const result = eval(this.state.data);
            this.setState({data: result});
        } catch (e) {
            this.setState({data: 'error'})
        }
    }

    handleClick = e => {
        const value = e.target.getAttribute('data-value');
        switch(value) {
            case 'limpiar':
                this.setState({ data: ''});
                break;
            case 'igual':
                this.calculate();
                break;
            default:
                this.setState({ data: this.state.data + value});
        }
    }
    render(){
        return(
            <div className="Calculadora">
                <Pantalla data={this.state.data}/>
                <MatrizBotones>
                    <Boton onClick={this.handleClick} label="C" value="limpiar" />
                    <Boton onClick={this.handleClick} label="7" value="7" />
                    <Boton onClick={this.handleClick} label="4" value="4" />
                    <Boton onClick={this.handleClick} label="1" value="1" />
                    <Boton onClick={this.handleClick} label="0" value="0" />

                    <Boton onClick={this.handleClick} label="/" value="/" />
                    <Boton onClick={this.handleClick} label="8" value="8" />
                    <Boton onClick={this.handleClick} label="5" value="5" />
                    <Boton onClick={this.handleClick} label="2" value="2" />
                    <Boton onClick={this.handleClick} label="." value="." />

                    <Boton onClick={this.handleClick} label="x" value="*" />
                    <Boton onClick={this.handleClick} label="9" value="9" />
                    <Boton onClick={this.handleClick} label="6" value="6" />
                    <Boton onClick={this.handleClick} label="3" value="3" />
                    <Boton onClick={this.handleClick} label="" value="null" />

                    <Boton onClick={this.handleClick} label="-" value="-" />
                    <Boton onClick={this.handleClick} label="+" height="2" value="+" />
                    <Boton onClick={this.handleClick} label="=" height="2" value="igual" />
                </MatrizBotones>
            </div>
        );
    }
}

export default Calculadora;