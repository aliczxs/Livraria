import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('http://localhost:8080/produtos');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`); // Para capturar erros de status HTTP
                }
                const data = await response.json();
                setProdutos(data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <div>
            <header style={headerStyle}>
                <h1>Welcome to Our Website!</h1>
                <nav>
                    <ul style={navStyle}>
                        <li><a href="#" style={linkStyle}>Home</a></li>
                        <li><a href="#" style={linkStyle}>About</a></li>
                        <li><a href="#" style={linkStyle}>Services</a></li>
                        <li><a href="#" style={linkStyle}>Contact</a></li>
                    </ul>
                </nav>
            </header>
            <section style={sectionStyle}>
                <h2>Home Page</h2>
                <p>
                    This is the home page of your website. You can add content, images, and
                    more sections here to customize it.
                </p>

                <div style={cardContainerStyle}>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        produtos.map(produto => (
                            <Card key={produto.id} title={produto.titulo} description={produto.descricao} />
                        ))
                    )}
                </div>
            </section>
            <footer style={footerStyle}>
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
}

function Card({ title, description }) {
    return (
        <div style={cardStyle}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

// Estilos em objetos
const headerStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
};

const navStyle = {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
};

const sectionStyle = {
    padding: '20px',
    textAlign: 'center',
};

const footerStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
};

const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '20px',
};

const cardStyle = {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    padding: '20px',
    margin: '10px',
    width: '200px',
};

export default App;
