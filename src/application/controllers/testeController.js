import nadaMdl from 'middlewares/nada'
import casaMdl from 'middlewares/casa'

function testeController (app) {
  app.get('/teste', nadaMdl, casaMdl, (req, res) => {
    res.send('<h1>NOVA PAGINA DE TESTE</h1>')
  })
}

export default testeController
