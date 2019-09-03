import React from 'react'
import tabela from './tabela.css'


        const ItemLista = props => {
            return(
                    <tr>
                        <td>{props.contato}</td>
                        <td>{props.modelo}</td>
                        <td>{props.marca}</td>
                        <td>{props.valor}</td>
                        <td id="renov">{props.renovacao}</td>
                        <td id="btn">
                            <button type="submit" class="waves-effect waves-light green btn small">Editar</button>&nbsp;&nbsp;
                            <button type="submit" class="waves-effect waves-light red btn small">Excluir</button>
                        </td>
                    </tr>
                    )
        }
export default ItemLista