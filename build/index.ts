import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 8000;

app.get('/api/getKey', (req:Request, res:Response) => {
    const API_KEY = String(process.env.REACT_APP_API_KEY)
    const options: {method: 'GET', url: string, header: {'x-functions-key': string}} ={
        method:'GET',
        url:'https://warehouse-apps.azurewebsites.net/api/GetShipmentData',
        header:{
            'x-functions-key': API_KEY
        }
    };
    axios(options).then(response => console.log(response.data));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})