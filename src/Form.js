import React from 'react'
// Instacia materialize
import M from "materialize-css";
import logo from './form.css'

class Form extends React.Component {
    state = {
        contato: '',
        modelo: '',
        marca: '',
        renovacao: '',
        valor: '',
        estimativa:''
    }
    
    handleChange = e =>{
        this.setState({[e.target.name]:e.target.value})
        
        if(e.target.name=="renovacao"){
            this.setState({renovacao:'sim'})                        
        }else{
             this.setState({renovacao:'nao'})
        }
    }

    componentDidMount() {
        let selects = document.querySelectorAll('select');

        M.FormSelect.init(selects, {});
    }   
    
    handleClick = () =>{
        if((this.state.renovacao=='nao') && ((this.state.marca="Chevrolet") || (this.state.marca="Fiat"))){
            let valor1 = ((3/100)*this.state.valor);
             this.setState({estimativa: valor1});                 
        }if((this.state.renovacao=='nao') && ((this.state.marca="Citroen") || (this.state.marca="Ford")|| (this.state.marca="Volksvagen"))){
            let valor1 = ((4/100)*this.state.valor);
            this.setState({estimativa: valor1});
        }if((this.state.renovacao=='sim') && ((this.state.marca="Citroen") || (this.state.marca="Chevrolet") || (this.state.marca="Fiat")|| (this.state.marca="Ford")|| (this.state.marca="Volksvagen"))){
            let valor1 = ((10/100)*this.state.valor);
            this.setState({estimativa: valor1});
           
        }
    }
    
    
    handleSubmit = e =>{
        e.preventDefault();
         
        let carros = []
        
        if(localStorage.getItem('carros')){
            carros = JSON.parse(localStorage.getItem("carros"))
        }
        carros.push({
            contato:this.state.contato,
            modelo:this.state.modelo,
            marca:this.state.marca,
            renovacao:this.state.renovacao,
            valor:this.state.valor
        })
        
        localStorage.setItem("carros",JSON.stringify(carros))
        
        this.setState({
            contato: '',
            modelo: '',
            marca: '',
            renovacao: '',
            valor: '',
            estimativa:''
        })
        
        alert("Interesse Regristrado com sucesso!");
    }
    
    render() {
        return (
                <div className='container' id="formulario">
                    <div className="row">
                        <div className="col s12 m10">
                            <div className="card white darken-1">
                                <div className="card-content white-text">
                                    <div className="row" >
                                        <form onSubmit={this.handleSubmit}>
                                            <div className = "row">
                                                <div class = "input-field col s12">
                                                    <input id="first_name" autoFocus name="contato" type="text" class="validate" onChange={this.handleChange} value={this.state.contato} />
                                                    <label for = "name">Cliente/Contato</label>
                                                </div>
                                                <div className = "input-field col s12">
                                                   <input id="first_name"  type="text" class="validate" name="modelo" onChange={this.handleChange} value={this.state.modelo} />
                                                    <label for = "name">Modelo Veiculo</label>
                                                </div>
                                                <div className = "input-field col s6">
                                                    <div class="input-field col s12">
                                                        <select name="marca" onChange={this.handleChange} value={this.state.marca} >
                                                            <option ></option>
                                                            <option >Citroen</option>
                                                            <option >Chevrolet</option>
                                                            <option >Fiat</option>
                                                            <option >Ford</option>
                                                            <option >Volksvagen</option>
                
                                                        </select>
                                                        <label>Marca</label>
                                                    </div>
                                                </div>
                
                                                <div class = "input-field col s6">
                                                    <label>
                                                        <input type="checkbox" class="filled-in" name="renovacao" onChange={this.handleChange} checked={this.state.renovacao =='sim'} />
                                                        <span>É Renovação</span>
                                                    </label>                                                      
                                                </div>
                
                                            </div>
                                            <br/>
                                            <div className = "input-field col s12">
                                              <input id="first_name"  type="text" class="validate" name="valor" onChange={this.handleChange} value={this.state.valor} />
                                                <label for = "name">R$ Avaliação Tabela Fipe</label>
                                            </div>
                                           <p>Estimativa do valor do seguro: R$ {this.state.estimativa}</p>
                                           <br/>
                                            <button type="submit" class="waves-effect waves-light red btn" id="btn-novo">Novo</button>
                                            <a class="waves-effect waves-light red btn" id="btn-calcular" onClick={this.handleClick}>Calcular</a>
                                            <a class="waves-effect waves-light red btn" id="btn-listar">Listar</a>
                
                                        </form>
                                    </div>
                                </div>
                
                            </div>
                        </div>
                    </div>
                </div>

                )
    }
}
export default Form;