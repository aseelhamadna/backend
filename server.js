const express =  require('express');
const app = express();
app.get('/api/customers', (req,res) =>{
    const customers = [
        { firstName:'jhon', lastName:'doe', email:'aseel@gmail.com',passsword:'hhhi'},
    ];
    res.json(customers);
})

const port = 5000;
app.listen(port,()=> console.log('Server started on port ${port}'));