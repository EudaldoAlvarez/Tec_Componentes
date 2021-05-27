import React, {Component} from 'react';
import "./css/pantalla.css";

class Pantalla extends Component {
    render(){
        return(
            <div className="Pantalla">
                {this.props.data}
            </div>
        );
    }
}

export default Pantalla;