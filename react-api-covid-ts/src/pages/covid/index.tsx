import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Title, Informações } from './styles';

import { BsArrow90DegLeft } from 'react-icons/bs'
import api from '../../services/api';
import { Repositories } from '../home/styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  uf: string,
  state: string,
  cases: number,
  deaths: number,
  suspects: number,
  refuses: number,
  datetime: number
}

const Covid: React.FC = () => {
  const [repository, setRepository] = useState<Repository>();
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect (() => {
    async function loadData(): Promise<void> {
      const [repositorios] = await Promise.all ([
        await api.get(`/brazil/uf/${params.repository}`)
      ])
      setRepository(repositorios.data);
    }
    loadData()
  }, [params.repository])

return (
  <>
  <header>
        <a href='/'>
          <strong>CovidApi</strong>
        </a>
  </header>
  <Title><h1>Estatísticas sobre o Coronavírus no estado de {repository?.state}</h1></Title>

  <Informações>

    <div>
      <img src= "https://cdn.pixabay.com/photo/2020/04/29/08/24/coronavirus-5107804_960_720.png" alt ='Covid'/>
      <h2>{repository?.state}</h2>
      <h3>UF: {repository?.uf}</h3>
      <h4>Casos: {repository?.cases}</h4>
      <h5>Mortes: {repository?.deaths}</h5>
      <h6>Suspeitas: {repository?.suspects}</h6>
      <span>Recusados: {repository?.refuses}</span>
      <strong>{repository?.datetime}</strong>

    <Link to='/'>
      <b><BsArrow90DegLeft size={36} color="#fff" /></b>
    </Link>
    </div>

  </Informações>

  </>
)
};

export default Covid;