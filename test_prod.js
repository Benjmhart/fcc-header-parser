// built for use with Quokka https://quokkajs.com/

const fetch = require('node-fetch')
const baseurl = `https://fcc-header-parser-bhart.herokuapp.com/`
const url1 = `${baseurl}api`

const getstuff = async (url) => {
    const r = await fetch(url, {})
    const j = await r.json()
    return j
}

const response = getstuff(url1) 
response

