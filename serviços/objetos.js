    const fs = require("fs")

    const objetos = JSON.parse( fs.readFileSync("./dataBase/objetos.json") )

    function getTodosObjetos() {
        return objetos
    }

    function getObjetoPorId(id) {

        const objetoFiltrado = objetos.filter( objeto => objeto.id === id )[0]
        return objetoFiltrado
    }

    function insereObjeto(objetoNovo) {

        const novaListaDeObjetos = [ ...objetos, objetoNovo ]

        fs.writeFileSync("./dataBase/objetos.json", JSON.stringify(novaListaDeObjetos))
    }

    function modificaObjeto(modificacoes, id) {
        const indiceModificado = objetos.findIndex(objeto => objeto.id === id)

        const conteudoMudado = { ...objetos[indiceModificado], ...modificacoes }

        objetos[indiceModificado] = conteudoMudado

        fs.writeFileSync("./dataBase/objetos.json", JSON.stringify(objetos))
    }

    function deletaObjetoPorId(id) {

        const objetosFiltrados = objetos.filter( objeto => objeto.id !== id )
        fs.writeFileSync("./dataBase/objetos.json", JSON.stringify(objetosFiltrados))
    }

    module.exports = {
        getTodosObjetos,
        getObjetoPorId,
        insereObjeto,
        modificaObjeto,
        deletaObjetoPorId
    }