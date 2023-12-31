const morgan = require('morgan')
const fs = require('fs');


module.exports= ()=>{
    if(process.env.MODE==='development')
        return morgan('dev')
    else{
        const [date, time] = new Date().toISOString().split('T')
        return morgan('combined', {
            stream: fs.createWriteStream(`./logs/${date}.log`, {flags:'a+'})
        })
    }

}
module.exports