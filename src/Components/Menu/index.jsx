import { Container } from "./style";
import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import defaultUser from "../../assets/default.svg";
import { FiSearch } from "react-icons/fi";

import { Button } from "../Button"
import { Input } from "../Input";


export function Menu({open}){
    const { Logout } = useAuth();
    const navigate = useNavigate();
  
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState(defaultUser);
  
    async function fetchUser() {
      try {
        const response = await api.get("/users");
        const userData = response.data.user;
        setUser(userData);
        setName(userData.name || '');
        if (userData.avatar) {
          setAvatar(`${api.defaults.baseURL}/files/${userData.avatar}`);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    }
  
    useEffect(() => {
      fetchUser();
    }, []);

    async function handleKeyDown(event) {
        if (event.key === 'Enter') {
            navigate(`/index/${event.target.value}`);
        }
    }

    return(
        <Container data-menu-open={open}>
           <header>
           <h2>RocketMovies</h2>
           </header>

           <main>
            <div className="Search">
             <Input
              type="text"
              icon={FiSearch}
              placeholder="Pesquisar pelo título"
              onKeyDown={handleKeyDown}
             />               
            </div>


            <div className="Profile">

            <Link to="/user">
              <img src={avatar} alt="imagem do usuário" />
            </Link>
            <div>
             <Link to="/user">
              <strong>{name}</strong>
             </Link>

             <Link to="/">
              <span onClick={Logout}>sair</span>
             </Link>
            </div>

            <Link to="/create">
             <Button title="Adicionar filme" />
            </Link>

            </div>

           </main>
        </Container>
    )
}