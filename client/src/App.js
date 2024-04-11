import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Acceuil from "./components/pages/acceuil/Acceuil";
import HomeMenu from "./components/pages/home/homeMenu/HomeMenu";
import HomeProfil from "./components/pages/home/option/homeProfil/HomeProfil";
import HomeAcceuil from "./components/pages/home/option/homeAcceuil/HomeAcceuil";
import HomeCours from "./components/pages/home/option/homeCours/HomeCours";
import HomeActivite from  "./components/pages/home/option/homeActivites/HomeActivite"
import HomeCommentaire from  "./components/pages/home/option/homeCommentaire/HomeCommentaire"
import HomeDeconnexion from  "./components/pages/home/option/homeDeconnexion/HomeDeconnexion"
import HomeFinance from  "./components/pages/home/option/homeFinance/HomeFinance"
import HomePedagogie from  "./components/pages/home/option/homePedagogie/HomePedagogie"
import SignUpForm from './components/pages/signup/Signup';
import  LoginForm from './components/pages/login/Login'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMenu />}>
          <Route index element={<HomeAcceuil />} />
          <Route path='/profil' element={<HomeProfil />} />
          <Route path='/activite' element={<HomeActivite />} />
          <Route path='/commentaire' element={<HomeCommentaire />} />
          <Route path='/cours' element={<HomeCours />} />
          <Route path='/deconnexion' element={<LoginForm />} />
          <Route path='/pedagogie' element={<HomePedagogie />} />
          <Route path='/finance' element={<HomeFinance />} />
          <Route path='/Signup' element={<SignUpForm />} />
          <Route path='/Login' element={<LoginForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
