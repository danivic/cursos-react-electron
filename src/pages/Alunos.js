import React, {Component} from 'react'
import '../components/Navbar.css';
import api from '../api'

class App extends Component{

    state = {
      alunos: [],
    }
  
  async componentDidMount(){
    const response = await api.get('/alunos')
   // console.log(response.data);
    this.setState({alunos: response.data});
  }
  
    render(){
  const {alunos} = this.state;
  console.log(alunos);
      return(
        <div>
            <center>
                <br/>
        <h1>Lista de Alunos</h1>
        <br/>
        <hr/>
        <br/>        
        <ul style={{listStyleType: "nome", margin:0, padding:0}}>
        
          {alunos.map(aluno => (
            <li key={aluno._id}><br/>
            <div className='elemento'>
            <h3>Nome: {aluno.nome}</h3>            
              <p>E-mail: {aluno.email} </p>
              </div>
            </li>
          ))}          
        </ul>        
        </center>
        </div>
      );
    };
  };

  export default App;


/* export default function Alunos()  {
    return (
        
        <html>
        <head>
            <title>Alunos</title>                
        </head>
        <body>
            <center>
                <br />
                <h1>Lista dos Alunos</h1>
                <br />
                <hr />
                <br/>                    
                <div class="elemento">                        
                <ul>
                    <li>Aluno 1</li>
                    <br />
                    <li>Aluno 2</li>
                    <br />
                    <li>Aluno 3</li>
                    <br />
                    <li>Aluno 4</li>
                    <br />
                    <li>Aluno 5</li>
                </ul>                    
                </div>                    
                <br />
            </center>
        </body>
    </html>
          
       
    )
} */