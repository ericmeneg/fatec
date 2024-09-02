import express from 'express'
import { Request, Response } from 'express'

const app = express()
const port = 3000

app.get('/',(req: Request,res: Response)=>{
    res.send('Olá mundo!')
})

app.get('/tabuada/:numero',(req: Request,res: Response)=>{
    const numero = Number(req.params.numero)
    let delivery = ''
    for (let i=1; i <= 10; i++){
        let resultado = i * numero
        delivery = delivery + (`<p>${i}x${numero}=${resultado}</p>`)
    }
    res.send(delivery)

})

app.listen(port, () =>{
    console.log(`Server rodando em http://localhost:${port}`)
})