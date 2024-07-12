const { getTodosObjetos, getObjetoPorId, insereObjeto, modificaObjeto, deletaObjetoPorId } = require("../serviços/objetos")

function getObjetos(req, res) {
    try {
        const objetos = getTodosObjetos()
        res.send(objetos)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function getObjeto(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const objeto = getObjetoPorId(id)
            res.send(objeto)
        } else {
            res.status(422)
            res.send("Id inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function postObjeto(req, res) {
    try {
        
        console.log(req.body); 
        const objetoNovo = req.body
        if(req.body.nome) {
            insereObjeto(objetoNovo)
            res.status(201)
            res.send("Objeto inserido com sucesso")
        } else {
            res.status(422)
            res.send("O campo nome é obrigatório")
        }        
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchObjeto(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const body = req.body
            modificaObjeto(body, id)
            res.send("Item modificado com sucesso")
        } else {
            res.status(422)
            res.send("Id inválido")
        }       
    } catch(error) {
        res.status(500)
        res.send(error.message) 
    }
}

function deleteObjeto(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deletaObjetoPorId(id)
            res.send("Objeto deletado com sucesso")
        } else {
            res.status(422)
            res.send("ID inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

module.exports = {
    getObjetos,
    getObjeto,
    postObjeto,
    patchObjeto,
    deleteObjeto
}