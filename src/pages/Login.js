import { Header } from 'antd/lib/layout/layout'
import React from 'react'

export default function Login() {

    const avancar = () => {
alert('foot')
    }

    const criarconta = () => {
        alert('foot')
            }

    return (
        
        <main>
            Login
            <form>
                <input type="text" placeholder="Nome de usuário" />
                <input type="password" placeholder="Senha" />
                <button type="button" onClick={avancar}>Avançar</button>
                <button type="button" onClick={criarconta}>Criar Conta</button>
            </form>
        </main>
    )
}