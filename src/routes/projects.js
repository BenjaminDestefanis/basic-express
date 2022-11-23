const { Router } = require('express')
const router = Router()
const { getProjects } = require('../controllers/projects.controllers')

//ENDPOINTS


router.get('/projects', getProjects)

router.get('/projects/:id', (req, res) => {

})


router.post('/projects', (req, res) => {
    res.send('Creando empleados')
})


router.put('/projects/:id', (req, res) => {
    res.send('Actualizando empleados')
})


router.delete('/projects', (req, res) => {
    res.send('Eliminando empleados')
})


module.exports = router;