import { Container, Form, Header, Avatar } from "./style";
import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from 'react-icons/fi';
import defaultUser from "../../assets/default.svg";

import { ButtonText } from "../../Components/ButtonText";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { api } from "../../services/api";

export function User() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [old_password, setOldPassword] = useState('');

  const [avatar, setAvatar] = useState(defaultUser);
  const [avatarFile, setAvatarFile] = useState(null);

  async function fetchUser() {
    try {
      const response = await api.get("/users");
      const userData = response.data.user;
      setUser(userData);
      setName(userData.name || '');
      setEmail(userData.email || '');
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

  function handleReturn() {
    navigate(-1)
   }

  if (!user) {
    return <p>Carregando...</p>; 
  }

  return (
    <Container>
      <Header>
       
          <ButtonText
            icon={FiArrowLeft}
            title="Voltar"
            onClick={handleReturn}
          />
        
      </Header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Imagem do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input 
              id="avatar" 
              type="file"
              onChange={e => {
                const file = e.target.files[0];
                setAvatarFile(file);

                const imagePreview = URL.createObjectURL(file);
                setAvatar(imagePreview);
              }} 
            />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          icon={FiUser}
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          value={old_password}
          onChange={e => setOldPassword(e.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title="Salvar"
          onClick={async () => {
            try {
              await api.put("/users", { name, email, old_password, password });

              if (avatarFile) {
                const fileForm = new FormData();
                fileForm.append("avatar", avatarFile);

                await api.patch("/users/avatar", fileForm);
                
              }
            } catch (error) {
              if (error.response) {
                alert(error.response.data.message);
              } else {
                alert("Não foi possível atualizar os dados");
              }
            }
          }}
        />
      </Form>
    </Container>
  );
}
