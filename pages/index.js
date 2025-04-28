import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Raphael Nascimento</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
                Estudante de Ciência da Computação | Foco em Desenvolvimento e Lógica | Buscando Estágio em TI
            </p>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <a
                    href="https://github.com/cypreste"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#333',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        transition: 'background-color 0.3s',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#555'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#333'}
                >
                    <FaGithub style={{ marginRight: '8px' }} /> GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/raphaelcypreste/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#0A66C2',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        transition: 'background-color 0.3s',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#004182'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0A66C2'}
                >
                    <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
                </a>
            </div>

            <h2>Projetos em Destaque:</h2>
            <ul>
                {projetos.map((projeto, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        <strong>{projeto.nome}:</strong> {projeto.descricao}{' '}
                        <a href={projeto.link} target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2' }}>
                            [Ver Projeto]
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
