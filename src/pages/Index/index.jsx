import { Container, Main, Title, Movie } from "./style";
import { useState, useEffect } from "react";

import { Link, useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { FiArrowLeft } from 'react-icons/fi';

import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Stars } from "../../Components/Stars";
import { Tag } from "../../Components/Tags";

export function Index() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const { index } = useParams();

  async function fetchMovies() {
    if (!index) {
      console.error("Índice não fornecido");
      setMovies([]);
      return;
    }

    try {
      const response = await api.post("/notes/index", { index });

      if (Array.isArray(response.data)) {
        setMovies(response.data);
      } else {
        console.error("Dados recebidos não são um array");
        setMovies([]);
      }
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      setMovies([]);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, [index]); 

  function handleReturn() {
   navigate(-1)
  }

  return (
    <Container>
      <Header />
      <Title>
        <h2>Resultados para: {index}</h2>
       
          <Button 
           icon={FiArrowLeft} 
           title="Voltar" 
           onClick={handleReturn}
           />
       
      </Title>
      <Main data-have-movies={!!movies.length}>
        {movies.length === 0 ? (
          <h2>Nenhum filme encontrado</h2>
        ) : (
          movies.map((movie) => (
            <Link to={`/preview/${movie.id}`} key={movie.id}>
              <Movie>
                <div className="title">
                  <h3>{movie.title}</h3>
                  <Stars rating={movie.rating} />
                </div>
                <div className="description">
                  <div className="p">{movie.description}</div>
                </div>
                <div className="tags">
                  {movie.tags && movie.tags.length > 0 ? (
                    movie.tags.map((tag, index) => (
                      <Tag key={index} bgColor='#312E38' title={tag} />
                    ))
                  ) : (
                    <p>No tags available</p>
                  )}
                </div>
              </Movie>
            </Link>
          ))
        )}
      </Main>
    </Container>
  );
}
