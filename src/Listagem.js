import React from 'react'
import ItemLista from './ItemLista'
import tabela from './tabela.css'


class Listagem extends React.Component {
    
    state ={
        carros:[]
    }
    componentDidMount(){
        this.loadCarros()
    }
    loadCarros = async() =>{
        let dados = await JSON.parse(localStorage.getItem('carros'))
        this.setState({carros:dados})
     
    }

    render() {
        return(
                <div className='container' id="tabela">
                    <div className="row">
                        <div className="col s12 m12">
                            <div className="card white darken-1">
                                <div className="card-content grey-text">
                                    <div className="row" >
                                        <div className="mx-2">
                                            <table className="table table-sm table-stripped table-bordered table-action">
                                                <thead>
                                                    <tr className="table-primary">
                                                        <th>Contato</th>
                                                        <th>Modelo</th>
                                                        <th>Marca</th>
                                                        <th>Valor</th>
                                                        <th>Renovação</th>
                                                        <th id="actions">Ações</th>
                                                    </tr>
                                                </thead>
                
                                                <tbody id="tabelaBody">
                                                    {this.state.carros.map((carro) => (
                                                <ItemLista key={carro.contato}
                                                           contato={carro.contato}
                                                           modelo={carro.modelo}
                                                           marca={carro.marca}
                                                           valor={carro.valor}
                                                          renovacao={carro.renovacao}
                                                           />
                                                                        ))}
                                                </tbody>
                
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                )
    }
}
export default Listagem