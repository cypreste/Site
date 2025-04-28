import React from 'react';
import styles from '../styles/Home.module.css';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'; // ÍCONES AQUI

const projetos = [
  {
    nome: '🃏 Super Trunfo - Batalha de Cartas em C',
    descricao: 'Projeto em C para lógica e estrutura de dados',
    link: 'https://github.com/cypreste/Desafio-Cartas-Super-Trunfo',
  },
  // Adicione mais projetos aqui
];

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Raphael Nascimento</h1>
      <p>
        Estudante de Ciência da Computação | Foco em Desenvolvimento e Lógica | Buscando Estágio em TI
      </p>

      <p>
        <FaGithub size={20} style={{ marginRight: '8px' }} />
        <strong>GitHub:</strong>{' '}
        <a href="https://github.com/cypreste" target="_blank" rel="noopener noreferrer">
          github.com/cypreste
        </a>
      </p>

      <p>
        <FaLinkedin size={20} style={{ marginRight: '8px' }} />
        <strong>LinkedIn:</strong>{' '}
        <a href="https://www.linkedin.com/in/raphaelcypreste/" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/raphaelcypreste
        </a>
      </p>

      <p>
        <FaFilePdf size={20} style={{ marginRight: '8px' }} />
        <strong>Currículo (PDF):</strong>{' '}
        <a href="/curriculo-raphael.pdf" target="_blank" rel="noopener noreferrer">
          Baixar Currículo
        </a>
      </p>

      <h2>Projetos em Destaque:</h2>
      <ul>
        {projetos.map((projeto, index) => (
          <li key={index}>
            <strong>{projeto.nome}</strong>
            {projeto.descricao}{' '}
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
              Ver projeto
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;