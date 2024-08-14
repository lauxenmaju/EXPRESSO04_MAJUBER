// como carregar do mysql atraves de um arquivo externo

const express = require("express")
const mysql = require("mysql2")

const mysql_config = require("./mysql_config")

const app = express()
app.listen(3000,()=>{
    console.log("Servidor em execução")
})

const connection = mysql.createConnection(mysql_config)



