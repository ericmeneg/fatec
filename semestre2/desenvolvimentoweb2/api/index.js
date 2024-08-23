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
app.get('/tabuada',(req,res)=>{
    const numero = 8
    let delivery = ''
    for (let i=1; i <= 10; i++){
        let resultado = i * numero
        delivery = delivery + (`<p>${i}x${numero}=${resultado}</p>`)
    }
    res.send(delivery)
})

app.listen(port, ()=>{
    console.log(`API rodando em http://localhost:${port}`)
})