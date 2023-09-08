import React from 'react'
import { Header } from './components/Header'
import { Card } from './components/Card'

import banner from './imagens/banner.jpg'
import card1 from './imagens/card1.jpg'
import card2 from './imagens/card2.jpg'
import card3 from './imagens/card3.jpg'
import card4 from './imagens/card4.jpg'
import { Footer } from './components/Footer'

import styles from './styles.module.css'
import './styles/global.css'
// npm install
// npm run start

const requisicao = [
    {
        "id": 1,
        "titulo": "Missão impossivel 2",
        "imagem": card1
    
    },
    {
        "id": 2,
        "titulo": "Missão impossivel 3",
        "imagem": card2
    
    },
    {
        "id": 3,
        "titulo": "Missão impossivel 5",
        "imagem": card3
    
    },
    {
        "id": 4,
        "titulo": "Missão impossivel 7",
        "imagem": card4
    
    }

    
]
        



// https://github.com/profchines
function App() {

    return (
        <>
            <Header />
            <img width="100%" src={banner} />
            <h1 className={styles.title}>Hello World</h1>
            <h1
                style={{
                    margin: 15
                }}
            >Filmes</h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                <Card titulo="Missão impossivel 2" imagem={card1} />
                <Card titulo="Missão impossivel 3" imagem={card2} />
                <Card titulo="Missão impossivel 5" imagem={card3} />
                <Card titulo="Missão impossivel 7" imagem={card4} />
                
            </div>

            <Footer/>
        </>
    );
}

export default App;
