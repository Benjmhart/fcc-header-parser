const express = require('express')
const path = require('path')


const getHeaders = req => {
    const language = req.headers["accept-language"] ? req.headers["accept-language"].split(',')[0] : ''
    const ip = req.ip.split(':')[3]
    const software = req.headers["user-agent"].split('(')[1].split(')')[0]
    
    return { 
        language, 
        ip, 
        testip: req.ip.split(':')
        software 
    }
}
module.exports = app => {
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../public', 'index.html'))
    })
    app.get('/api', (req, res) => {
        res.send(getHeaders(req))
        res.end()
    })
}