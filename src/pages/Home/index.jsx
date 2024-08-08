import { Container, Main, Title, Movie } from "./style";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { FiPlus } from 'react-icons/fi';
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Stars } from "../../Components/Stars";
import { Tag } from "../../Components/Tags";

export function Home() {
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    try {
      const response = await api.get("/notes");
      
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
  }, []); 

  return (
    <Container>
      <Header />
      <Title>
        <h2>Meus filmes</h2>
        <Link to="/create">
          <Button icon={FiPlus} title="Adicionar filme" />
        </Link>
      </Title>
      <Main data-have-movies={!!movies.length}>
        {Array.isArray(movies) && movies.length === 0 ? (
          <h2>Nenhum filme adicionado ainda</h2>
        ) : (
          Array.isArray(movies) && movies.map((movie) => (
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
                  {movie.tags.map((tag) => (
                    <Tag key={tag.id} bgColor='#312E38' title={tag.name} />
                  ))}
                </div>
              </Movie>
            </Link>
          ))
        )}
      </Main>
    </Container>
  );
}
