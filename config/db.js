const {connect} = require('mongoose')

module.exports = async()=>{
    try{
      const con=  await connect(process.env.MONGODB)
      console.log(`Connect to DB: HOST ${con.connection.host}`.green.underline)

    }catch(err){
        console.log(`Not connect to DB: Error: ${err.message}`.red)
    }
}