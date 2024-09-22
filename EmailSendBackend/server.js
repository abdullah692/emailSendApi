const express=require('express')
const cors=require('cors')

const app=express();

const port = process.env.PORT || 5001;

app.use(express.json());


app.use('/api/users',require('./Routes/apiRoute'))

app.listen(port, () => {
    console.log(`Port is listnening to  ${port}`);
  });
