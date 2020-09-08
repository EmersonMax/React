import React from 'react'
import './ListaProdutos.css'
import produtos from '../../data/produtos'
export default props => {
  
    const listaprodutos = produtos.map((produto, i) => {
        return (
            
            <tr key={produto.id} className = {i % 2 === 0 ? 'Par' : 'Impar'}>
            <td >
                {produto.id}  
            </td>
            <td>
                {produto.nome} 
            </td>
            <td>
               R$ {produto.preco}
            </td>
            </tr>
            
        );
    });
    return (
        <div className="TabelaProdutos">
            <table border="1">
                <thead>
            <tr>
                <th>Código </th>
                <th>Produto</th>
                <th>Preço</th>
            </tr>
            </thead>
            <tbody>
                {listaprodutos}
            </tbody>
            </table>
        </div>
    );
}