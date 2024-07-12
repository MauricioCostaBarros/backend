const express = require("express")
const cors = require("cors")
const rotaObjeto = require("./rotas/objetos")

const app = express()
app.use(express.json())
app.use(cors({origin:"*"}))

app.use('/objetos', rotaObjeto)

const port = 3001

app.listen(port, () => {
    console.log(`Escutando a porta ${port} `)
})