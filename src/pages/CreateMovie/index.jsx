import { Container, Main, FistInputs, SecondInput, Marcs, Buttons, Box, Marcadores, Marc, NewMarc } from "./style";

import { api } from "../../services/api";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FiArrowLeft, FiX, FiPlus } from 'react-icons/fi';

import { ButtonText } from "../../Components/ButtonText";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";

export function CreateMovie() {
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [newTag, setNewTag] = useState('');
  const [description, setDescription] = useState('');

  function handleTags() {
    if (newTag.trim() !== "") {
      setTags(prevState => [...prevState, newTag]);
      setNewTag("");
    }
  };

  function handleRemoveTag(index) {
    setTags(prevTags => prevTags.filter((_, i) => i !== index));
  };

  function handleRating(event) {
    const value = Number(event.target.value);

    if (value > 5 || value < 0 || isNaN(value)) {
      alert("Sua nota deve ser um número de 0 a 5");
      event.target.value = ""
    } else {
      setRating(value);
    }
  };

  function handleDelete() {
    if(!title || !rating || !description || !tags.length){
      return 
    }
    const Confirm = confirm("Deseja mesmo apagar todos os dados inseridos acima?");

    if(Confirm){
    setTags([])
    setTitle('')
    setRating('')
    setDescription('')
  }
  };

  async function handleAdd() {

  if(!title || !rating || !description ){
  return alert("Preencha todos os campos")
  }

  await api.post("/notes", {title, description, rating, tags})
  alert("Filme adicionado com sucesso!")
  setTags([])
  setTitle('')
  setRating('')
  setDescription('')
  };

  function handleReturn() {
   navigate(-1)
  }

  return (
    <Container>
      <Header />

      <Box>
        
          <ButtonText
            icon={FiArrowLeft}
            title="Voltar"
            onClick={handleReturn}
          />
    
      </Box>

      <Main>
        <h2>Novo filme</h2>

        <FistInputs>
          <Input
            value={title}
            placeholder="Título"
            fontFamily="'Roboto', sans-serif"
            onChange={e => setTitle(e.target.value)}
          />

          <Input
            type="text"
            value={rating}
            placeholder="Sua nota (de 0 a 5)"
            fontFamily="'Roboto', sans-serif"
            onChange={handleRating}
          />
        </FistInputs>

        <SecondInput>
          <textarea
            value={description}
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          ></textarea>
        </SecondInput>

        <Marcs>
          <h3>Marcadores</h3>

          <Marcadores>
            {tags.map((tag, index) => (
              <Marc key={String(index)}>
                <p>{tag}</p>
                <FiX onClick={() => handleRemoveTag(index)} />
              </Marc>
            ))}
            <NewMarc>
              <input
                type="text"
                value={newTag}
                placeholder="Novo marcador"
                onChange={e => setNewTag(e.target.value)}
              />
              <FiPlus
                type="button"
                onClick={handleTags}
              />
            </NewMarc>
          </Marcadores>
        </Marcs>

        <Buttons>
          <button onClick={handleDelete}>
            Excluir filme
          </button>

          <Button
            onClick={handleAdd}
            title="Salvar alterações"
          />
        </Buttons>
      </Main>
    </Container>
  );
}
