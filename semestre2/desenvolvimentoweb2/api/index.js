import express from 'express'
const app = express()
const port = 3000
app.use(express.json())

app.get('/',(requisicao,resposta)=>{
    resposta.send('Olá Mundo!')
})
app.get('/teste',(requisicao,resposta)=>{
    resposta.json({
        'msg': 'Teste'
    })
})

app.listen(port, ()=>{
    console.log(`API rodando em http://localhost:${port}`)
})