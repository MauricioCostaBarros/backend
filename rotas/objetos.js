const {Router} = require("express")

const {getObjetos, getObjeto, postObjeto, patchObjeto, deleteObjeto} = require("../controladores/objetos")

const router = Router()

router.get('/', getObjetos)

router.get('/:id', getObjeto)

router.post('/', postObjeto)

router.patch('/:id', patchObjeto)

router.delete('/:id', deleteObjeto)

module.exports = router