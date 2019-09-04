function captureError (error, res) {
  switch (error.type) {
    case 'GnetError':
      console.log('Erro na API')
      console.log(error.message)
      res.status(500).json({ error: 'Internal Error' })
      break

    case 'DatabaseError':
      console.log('Erro na Banco')
      console.log(error.message)
      res.status(500).json({ error: 'Internal Error' })
      break

    case 'ValidationError':
      console.log(error.message)
      res.status(400).json({ error: error.message })
      break

    default:
      console.log(error.message)
      res.status(500).json({ error: 'Internal Error' })
  }
}

export default captureError
