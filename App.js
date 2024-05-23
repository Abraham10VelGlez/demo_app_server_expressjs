const express = require('express') // modulo de expressjs
const app = express() /// constante de la app
const port = 3000 //puerto default puede cambiar
const apphtml = require('path') //modulo de carga  html paara expres

app.get('/', (req, res) => {
  //res.send('Hello World!')
  ///llamada de html
  res.sendFile(apphtml.join(__dirname + "/index.html"));

})

app.listen(port, () => {
  console.log(`EJEMPLO DE APP ESCUCHANDO AL PUERTO de CONEXION ${port}`)
})