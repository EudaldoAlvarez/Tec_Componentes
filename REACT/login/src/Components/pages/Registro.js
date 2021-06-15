import React, { Component} from "react";
import {registroServices} from "../../utils/api/services";

class Registro extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    handleOnInputChange =(key,event)=>{
        this.setState({
            [key]: event.target.value,
        });
        
    };

    handleRegistro = () =>{
        const {email,password}=this.state;
        const registroResponse =  registroServices(email,password);
    }

    render(){
        return(
            <>
                <h1>Registro</h1>
                <input 
                placeholder="email"
                type="email"
                onChange={(event)=> this.handleOnInputChange("email",event)} 
                />
                <input 
                placeholder="password"
                type="password"
                onChange={(event)=> this.handleOnInputChange("password",event)} 
                />
                <button onClick={this.handleRegistro}>Registrar</button>
                
            </>
        );
    }
}

export default Registro;