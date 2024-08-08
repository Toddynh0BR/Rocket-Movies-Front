import { Container, Main, Functions, Titles, Info, Tags, Texts, Box } from "./style";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';

import { Link, useParams, useNavigate } from "react-router-dom";

import { FiArrowLeft, FiClock } from 'react-icons/fi';

import { ButtonText } from "../../Components/ButtonText"
import { Header } from "../../Components/Header";
import { Stars } from "../../Components/Stars";
import { Tag } from "../../Components/Tags";

export function MoviePreview(){
  const navigate = useNavigate();
  const { id } = useParams();
  const [preview, setPreview] = useState(null);

    async function fetchMovie(){
     try{
     const response = await api.get(`/notes/preview/${id}`);

     setPreview(response.data)
     }catch(error){
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possivel buscar o filme")
      };
     }
    };

    useEffect(()=> {
     fetchMovie()
    }, [])

   function handleReturn() {
   navigate(-1)
  }

  if (!preview) {
     return <p>Carregando...</p>;
  }

const formattedDate = format(new Date(preview.movie.created_at), "dd/MM/yy 'às' HH:mm", { locale: ptBR });

return(
<Container>
    <Header></Header>

   <Box>
    
     <ButtonText 
         icon={FiArrowLeft}
         title="Voltar"
         onClick={handleReturn}
        />
   
    </Box>
    
    <Main>

    <Functions>

    <Titles>
     <h2>{preview.movie.title}</h2>
        <div>
        <Stars 
         width="20rem" 
         height="20rem"
         rating={preview.movie.rating}
         ></Stars>
        </div>
    </Titles>

    <Info>
        <img src={`${api.defaults.baseURL}/files/${preview.Creator.avatar}`} alt="" />
        <span id="creator">Por {preview.Creator.name}</span>
        <span id="date"><FiClock />{formattedDate}</span>
    </Info>

    <Tags>

    {preview.tags.map(tag => (
      <Tag 
        key={tag.id}
        bgColor="#282124"
        title={tag.name}
      />
     ))}

    </Tags>

    </Functions>

    <Texts>
    <p>{preview.movie.description}</p>
    </Texts>

    </Main>
</Container>
)
}