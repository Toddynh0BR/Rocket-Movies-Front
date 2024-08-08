import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Container, Main, Background} from './style';
import { useState } from 'react';

import { api } from "../../services/api"

import { Link, useNavigate } from 'react-router-dom';

import { ButtonText } from '../../Components/ButtonText';
import { Button } from '../../Components/Button';
import { Input } from '../../Components/Input';

export function SignUp(){
const navigate = useNavigate();
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

 async function handleSignUp(){
  if(!name || !email || !password){
    return alert("Preencha todos os campos!")
  }
  
  await api.post("/users/", {name, email, password})
  .then(()=> {
      alert("Usuário cadastrado com sucesso!")
      navigate("/RocketMovies-Front/");
       })
  .catch(error => {
    if(error.response){
      alert(error.response.data.message);
    }else {
      alert("Não foi possivel cadastrar o usuário.")
    }
  })
}

return(
<>
 <Container>
   <Main>
    <h1>RocketMovies</h1>
    <p>Aplicação para acompanhar tudo que assistir.</p>

  
    <h2>Crie sua conta</h2>

    <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />


    <Input
          placeholder="E-mail"
          type="e-mail"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

    
    <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

    <Button title="Cadastrar" onClick={handleSignUp}></Button>

  <Link to="/RocketMovies-Front/">  
    <ButtonText 
    icon={FiArrowLeft}
    title="Voltar para o login"
    />
  </Link>
    </Main>

    <Background/>
 </Container>


 </>
)
}