const { Router } = require('express')
const router = Router()
const { getProjects, createProjects } = require('../controllers/projects.controllers')

//ENDPOINTS


router.get('/projects', getProjects)

router.post('/projects', createProjects)


router.get('/projects/:id', (req, res) => {

})


router.put('/projects/:id', (req, res) => {
    res.send('Actualizando empleados')
})


router.delete('/projects', (req, res) => {
    res.send('Eliminando empleados')
})


module.exports = router;