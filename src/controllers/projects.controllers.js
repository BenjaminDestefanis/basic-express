const Project = require('../models/Project')

const getProjects = (req, res) => {
    res.send('getting projects')
}

const createProjects = async (req, res) => {
    const { name, priority, description} = req.body
    /* console.log(name, priority, description)
    console.log(req.body) */

      /* const newProject = await Project.create({
        name,
        description,
        priority
    })
     console.log(newProject)  

     console.log(Project.body)  */
    res.send('creating projects')
}

module.exports = {
    getProjects,
    createProjects
}