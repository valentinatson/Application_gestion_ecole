import React, { useState } from "react";
import style from "./Signup.module.css";
import { NavLink } from "react-router-dom";
import axios  from 'axios';

const Signup = () => {
  // Déclarer les états pour les valeurs des champs de formulaire
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [filiere, setFiliere] = useState("");
  const [typeParcours, setTypeParcours] = useState("");

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Utiliser les valeurs récupérées ici (par exemple, les envoyer à votre backend)
    console.log("Nom:", name);
    console.log("Prénom:", surname);
    console.log("Email:", email);
    console.log("Age:", age);
    console.log("Mot de passe:", password);
    console.log("Filière:", filiere);
    console.log("Type de parcours:", typeParcours);
    let infoSignup = {
        name : name,
        surname : surname,
        email : email,
        age : age,
        password : password,
        filiere : filiere,
        typeParcours : typeParcours
    }
    console.log(infoSignup);

    axios
        .post("http://localhost:5000/user/signup", infoSignup)
        .then((res) => {
                console.log(res.data);
                /* navigate("/login") */
        })
        .catch((error) => {
                console.log(error);
        });
  };

  return (
    <div>
      <h1>INSCRIPTION</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="surname">Prénom: </label>
        <input
          type="text"
          id="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
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
        <label htmlFor="file">Profile</label>
        <input type="file" src="" alt="" />
        <br />

        <label htmlFor="filiere">Filière: </label>
        <select
          id="filiere"
          value={filiere}
          onChange={(e) => setFiliere(e.target.value)}
        >
          <option value="GL">GL</option>
          <option value="GRH">GRH</option>
          <option value="GMP">GMP</option>
          <option value="GEII">GEII</option>
        </select>
        <br />
        <label htmlFor="type_parcours">Type de parcours: </label>
        <select
          id="type_parcours"
          value={typeParcours}
          onChange={(e) => setTypeParcours(e.target.value)}
        >
          <option value="LMD">LMD</option>
          <option value="BTS">BTS</option>
          <option value="Formation Modulaire">Formation Modulaire</option>
        </select>
        <br />
        <button type="submit">S'inscrire</button>
        <h3>j'ai déjà un compte,<NavLink to={"/Login"}> me connecter</NavLink></h3>
      </form>
    </div>
  );
};

export default Signup;
