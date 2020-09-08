import React from 'react'
import alunos from '../../data/alunos'
export default props => {
  
    const lis = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id} ) <b>{aluno.nome}</b> nota  {aluno.nota}
            </li>
        );
    });
    return (
        <div>
            <ul>
                
                <li>{lis}</li>
                
            </ul>

        </div>
    );
}