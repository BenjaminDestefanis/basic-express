const { Router } = require('express')
const router = Router()

//ENDPOINTS

router.get('/employes', (req, res) => {
    res.send('Obteniendo empleados')
})


router.post('/employes', (req, res) => {
    res.send('Creando empleados')
})


router.put('/employes', (req, res) => {
    res.send('Actualizando empleados')
})


router.delete('/employes', (req, res) => {
    res.send('Eliminando empleados')
})


module.exports = router;