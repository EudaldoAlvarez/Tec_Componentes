import React, { Component} from "react";
import {loginServices} from "../../utils/api/services";
import {withRouter} from  "react-router-dom"
import styles from "./css/login.css";
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    componentDidMount(){
        this.checkSesion();
        console.log(this.props);
        const token =localStorage.getItem("token");
        if(token){

        }
    }
    checkSesion = async()=>{

    }
    handleOnInputChange =(key,event)=>{
        this.setState({
            [key]: event.target.value,
        });
        
    };

    handleLogin = async () =>{
        const {email,password}=this.state;
        let loginResponse = await loginServices(email, password);
        if(loginResponse?.success){
            
            this.props.history.push("/Registro");
        }
    }

    render(){
        return(
            <>
                <h1 className="etiqueta">Iniciar sesion</h1>
                <input 
                className="email"
                placeholder="email"
                type="email"
                onChange={(event)=> this.handleOnInputChange("email",event)} 
                />
                <input 
                className="password"
                placeholder="password"
                type="password"
                onChange={(event)=> this.handleOnInputChange("password",event)} 
                />
                <button onClick={this.handleLogin}>Iniciar sesion</button>
                
            </>
        );
    }
}

export default withRouter(Login);