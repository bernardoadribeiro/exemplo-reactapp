import React, { useState, useEffect } from 'react';

import './FirstComponent.css'


function FirstComponent() {
  const [user, setUser] = useState(null);
  // user: variavel que vai receber o estado
  // setUser: funcao que vai setar o estado da variavel


  // Funcao para realizar procura de usuarios na API
  function handleSearch() {
    const apiUrl = 'https://randomuser.me/api/'

    fetch(apiUrl)
      .then(response => response.json()) // Obtem o JSON retornado pela API
      .then(data => {
        setUser(data.results[0]); // Carrega no estado com os dados do User retornado pela API.
      });
  }

  // Executa quando entra na pagina
  useEffect(() => {
    handleSearch(); // Faz GET para obter usuario
  }, []);

  // Se nao tiver carregado o usuario exibe loading
  if (!user) {
    return <div>Carregando...</div>;
  }

  return (
    // Retorna JSX com preenchido com o resultado da pesquisa.

    <div className="first-component">
        <img src={user.picture.large} alt={user.name.first} />
        <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
        <p> <strong>Email:</strong> {user.email}</p>
        <p> <strong>Celular:</strong> {user.cell}</p>
        <p> <strong>Endereço:</strong> {user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.country}, {user.location.postcode}</p>

        <button className='btn btn-primary' onClick={handleSearch}>Procurar</button>
    </div>
  );
}

export default FirstComponent;
