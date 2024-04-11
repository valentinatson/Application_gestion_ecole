import React, { useState } from "react";
/* import style from "./Login.module"; */
import { Navigate, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios  from 'axios';

const Login = () => {
  // Déclarer les états pour les valeurs des champs de formulaire


const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

const navigate = useNavigate();

  // Gérer la soumission du formulaire
const handleSubmit = (e) => {
    e.preventDefault();
    // Utiliser les valeurs récupérées ici (par exemple, les envoyer à votre backend)
    
    
    console.log("Email:", email);
    
    console.log("Mot de passe:", password);
    
    
    let infoLogin = {
        
        
        email : email,
        
        password : password,
        

    }
    console.log(infoLogin);

        axios
        .post("http://localhost:5000/user/login", infoLogin)
        .then((res) => {
            console.log(res.data);
            window.localStorage.setItem('token', res.data.accessToken)
            navigate("/")
            /* navigate("../home/option/homeAcceuil/HomeAcceuil.jsx") */

        })
        .catch((error) => {
                console.log(error);
        });   
  };

  return (
    <div>
      <h1>CONNEXION</h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        
        <label htmlFor="password">Mot de passe: </label>
        <input
          type="password"
          id="mdp"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        
        <button type="submit">S'inscrire</button>

        <h3>j'ai pas encore de compte,<NavLink to={"/Signup"}> m'inscrire</NavLink></h3>
      </form>
    </div>
  );
};

export default Login;
