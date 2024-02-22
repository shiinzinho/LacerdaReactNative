import React from "react";;
import AdmCadastroScreen from "./src/login/AdmLoginScreen";
import AdmLoginScreen from "./src/login/AdmLoginScreen";
import ClienteLoginScreen from "./src/login/ClienteLoginScreen";
import ProfissionalLoginScreen from "./src/login/ProfissionalLoginScreen";

function App(): JSX.Element{
  return(
    <ClienteLoginScreen/>
  );
}

export default App;