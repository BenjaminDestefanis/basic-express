const getProjects = (req, res) => {
    res.send('getting projects')
}

const createProjects = (req, res) => {
    res.send('creating projects')
}

module.exports = {
    getProjects,
    createProjects
}