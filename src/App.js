import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Alunos from './pages/Alunos';
import Matricula from './pages/Matricula';
import Cursos from './pages/Cursos';
import Horario from './pages/Horario';
import Turmas from './pages/Turmas';
import Professores from './pages/Professores';

function App() {
        return (
          <>
            <BrowserRouter>
              <Navbar />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/alunos' component={Alunos} />
                <Route path='/matricula' component={Matricula} />
                <Route path='/cursos' component={Cursos} />
                <Route path='/horario' exact component={Horario} />
                <Route path='/turmas' component={Turmas} />
                <Route path='/professores' component={Professores} />
              </Switch>
            </BrowserRouter>
          </>
        );
      }

export default App;