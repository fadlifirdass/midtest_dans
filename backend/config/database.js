const {Sequelize} = require('sequelize')

const db = new Sequelize ('ojt_midtest','root','',{
    host : 'localhost',
    dialect : 'mysql'
})



module.exports = db;