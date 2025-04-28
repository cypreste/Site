import React from 'react';

const projetos = [
    {
        nome: '🃏 Super Trunfo - Batalha de Cartas em C',
        descricao: 'Projeto em C para lógica e estrutura de dados',
        link: 'https://github.com/cypreste/Desafio-Cartas-Super-Trunfo'
    }
    // Adicione mais projetos aqui
];

const Home = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h1>Raphael Nascimento</h1>
            <p>
                Estudante de Ciência da Computação | Foco em Desenvolvimento e Lógica | Buscando Estágio em TI
            </p>
            <p>
                <strong>GitHub:</strong>{' '}
                <a href="https://github.com/cypreste" target="_blank" rel="noopener noreferrer">
                https://github.com/cypreste
                </a>
            </p>
            <p>
                <strong>LinkedIn:</strong>{' '}
                <a href="https://www.linkedin.com/in/raphaelcypreste/" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com/in/raphaelcypreste/
                </a>
            </p>
            <p>
                <strong>Currículo (PDF):</strong>{' '}
                <a href="/curriculo-raphael.pdf" target="_blank" rel="noopener noreferrer">
                    /curriculo-raphael.pdf
                </a>
            </p>

            <h2>Projetos em Destaque:</h2>
            <ul>
                {projetos.map((projeto, index) => (
                    <li key={index}>
                        <strong>{projeto.nome}:</strong> {projeto.descricao}{' '}
                        <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                            {projeto.link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
