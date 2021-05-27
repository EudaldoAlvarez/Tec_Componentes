import React, {Component} from 'react';
import "./css/Botones.css";

class MatrizBotones extends Component {
    render(){
        return(
            <div className="MatrizBotones">
                {this.props.children}
            </div>
        );
    }
}

export default MatrizBotones;