import React from 'react'
import '../components/Navbar.css';

export default function Home() {
    return (

        <html>
            <head>
                <title>Home</title>
            </head>
            <body>
                <center>
                    <br />
                    <h1>Projeto Integrador</h1>
                    <br />
                    <p>
                        Grupo 2: Felipe, <b>Ariane</b> e Daniel
                    </p>
                    <br />
                    <hr />
                </center>
                <div class="card">
                    <div class="card-body">
                        <div class="card-body img">
                            <img src="imagens/química.png" alt="química" />
                        </div>
                        <div class="card-body-p"><p>O nosso projeto foi a criação de uma api de cursos de química.</p>
                        </div>
                    </div>
                </div>
            </body>
        </html>

    )
}