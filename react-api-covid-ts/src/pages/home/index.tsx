import React, { useState, FormEvent } from 'react';
import { Form, Repositories, Title, Error } from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { HiOutlinePencil } from 'react-icons/hi'
import { FiArrowRight } from 'react-icons/fi'

interface Repository {
  state: string,
  uf: string

}

const Home: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(e:FormEvent<HTMLFormElement>,
    ): Promise<void> {
    e.preventDefault();

    if (!newRepo) {
      setInputError('Digite um UF ');
      return;
    }

    try {
      const response = await api.get<Repository>(`/brazil/uf/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch(err) {
      setInputError('Erro na busca por esse UF')
    }
  }
  return (
    <>

      <header>
        <strong>CovidApi</strong>
      <Form hasError={Boolean(!!inputError)} onSubmit={handleAddRepository}>
      <input
          value = {newRepo}
          onChange = {e => setNewRepo (e.target.value)}
          placeholder = "Pesquise por UF" />
          <button type = 'submit'><HiOutlinePencil size={26} color="#ff0000"/></button>
      </Form>

  {inputError && <Error><b>{inputError}</b></Error>}
      </header>

      <Title><h1>Pesquise sobre os casos de Covid no Brasil:</h1></Title>

      <Repositories>
        {repositories.map(repository => (

          <Link key={repository.uf}
          to={`/covid/${repository.uf}`} >
            <div>
              <img src = 'https://cdn.pixabay.com/photo/2020/04/29/08/24/coronavirus-5107804_960_720.png' alt = 'Covid' />
              <h2>{repository.state}</h2>
              <h3>UF: {repository.uf}</h3>
              <FiArrowRight size={46} color="#ff0000" />
            </div>
          </Link>
        ))};

      </Repositories>

    </>
  );
};

export default Home;