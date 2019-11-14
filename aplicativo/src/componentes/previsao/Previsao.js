import React, {Component} from 'react'

class Previsao extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="previsao">
            <Titulo
              data={this.props.data}
              resumo={this.props.resumo}
            />
            <Imagem
              imagem={this.props.imagem}
            />
            <Tabela
              temperatura={this.props.temperatura}
            />
          </div>
        )
    }
}

export default Previsao;