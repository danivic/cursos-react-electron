//import { Header } from 'antd/lib/layout/layout'
import React from 'react'

export default function Login() {

    const avancar = () => {
        alert('Teste: Ok')
    }

    const criarconta = () => {
        alert('Teste: Ok')
    }

    return (

        <main>
            <center>
                <br />
                <h2>Insira seu nome de usuário e senha</h2>
                <br />
                <hr/>
                <br/>
                <form>
                    <input type="text" placeholder="Nome de usuário" />
                    <br/>
                    <br/> 
                    <input type="password" placeholder="Senha" />
                    <br/>
                    <br/>
                    <button type="button" onClick={avancar}>Entrar</button>
                    <br/><br/>
                    <button type="button" onClick={criarconta}>Criar Conta</button>
                </form>
            </center>
        </main>
    )
}