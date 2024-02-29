import React from "react";;

//CADASTRO
import AdmCadastroScreen from "./src/cadastro/AdmCadastroScreen";
import ClienteCadastroScreen from "./src/cadastro/ClienteCadastroScreen";
import ProfissionalCadastroScreen from  "./src/cadastro/ProfissionalCadastroScreen";
import ServicoCadastroScreen from  "./src/cadastro/ServicoCadastroScreen";
import PagamentoCadastroScreen from  "./src/cadastro/PagamentoCadastroScreen";

//LOGIN
import AdmLoginScreen from "./src/login/AdmLoginScreen";
import ClienteLoginScreen from "./src/login/ClienteLoginScreen";
import ProfissionalLoginScreen from "./src/login/ProfissionalLoginScreen";

function App(): JSX.Element{
  return(
    <ProfissionalCadastroScreen/>
  );
}

export default App;