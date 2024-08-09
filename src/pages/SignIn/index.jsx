import { Container, Main, Background} from './style';

import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { useState } from "react";

import { FiMail, FiLock } from 'react-icons/fi';

import { ButtonText } from '../../Components/ButtonText';
import { Button } from '../../Components/Button';
import { Input } from '../../Components/Input';

export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
 
  const { signIn } = useAuth();
  
  function HandleSignIn(){
     setLoading(true)
     signIn({email, password});
  }

return(
<>
 <Container>
   <Main>
    <h1>RocketMovies</h1>
    <p>Aplicação para acompanhar tudo que assistir.</p>

  
    <h2>Faça seu login</h2>

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

   <Button 
    title="Entrar" 
    onClick={ HandleSignIn }
    loading={Loading}
    ></Button>

  <Link to="/register">
    <ButtonText 
     icon={FiMail}
     title="Criar Conta"
    />
  </Link>

   </Main>

   <Background/>
 </Container>


 </>
)
}