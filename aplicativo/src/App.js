import React from 'react';
import Comentarios from './componentes/Comentarios'
import Previsao from './componentes/previsao/Previsao'
import Contador from './componentes/Contador'
import comentarios from './dados/comentarios'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <div className="container">

        <div className="previsao">

        <Previsao 
        
        />

        </div>
        <Contador />

        <div className="comentarios">
          {
            comentarios.map((comentario) => (
              <Comentarios
                nome={comentario.autora.nome}
                imagem={comentario.autora.imagem}
                subtitulo={comentario.subtitulo}
                texto={comentario.texto}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default App;
