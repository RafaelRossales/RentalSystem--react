import React, { Component }
from 'react'
        import { Link }
from 'react-router-dom'

        export default class Menu extends Component {
    render() {
        return(

                <nav>
                    <div className="nav-wrapper">
                        <Link to="#" className="brand-logo center">Locadora </Link>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><Link to="/Form">Cadastrar</Link></li>
                            <li><Link to="/Listagem">Listar</Link></li>
                            <li><Link to="/">JavaScript</Link></li>
                        </ul>
                    </div>
                    <div className ='col-sm-4'>
              <p> <img src="argo_banner.png" alt='Dentista' className='img-fluid' className='img-fluid mb-2'/></p>
              </div>  
                </nav>

                )
    }

}