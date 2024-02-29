import React from "react";;
import AdmCadastroScreen from "./src/cadastro/AdmCadastroScreen";
import ClienteCadastroScreen from "./src/cadastro/ClienteCadastroScreen";
import ProfissionalCadastroScreen from  "./src/cadastro/ProfissionalCadastroScreen";
import AdmLoginScreen from "./src/login/AdmLoginScreen";
import ClienteLoginScreen from "./src/login/ClienteLoginScreen";
import ProfissionalLoginScreen from "./src/login/ProfissionalLoginScreen";

function App(): JSX.Element{
  return(
    <ClienteCadastroScreen/>
  );
}

export default App;