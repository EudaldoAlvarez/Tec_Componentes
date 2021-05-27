import React, { Component } from 'react';
import "./css/boton.css";

class Boton extends Component {
    render(){
        return(
            <div 
                className="Boton"
                onClick={this.props.onClick}
                data-height={this.props.height}
                data-width={this.props.width}
                data-value={this.props.value}>
                {this.props.label}
            </div>
        );
    }
}

export default Boton;