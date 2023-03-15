import express, { Request, Response } from 'express';

const app = express()
const port = process.env.PORT || 8000

app.get('/api/getKey', (req: Request, res: Response) => {
  const options: { method: 'GET', url: string, headers: { 'x-functions-key': string } } = {
    method: 'GET',
    url: 'https://warehouse-apps.azurewebsites.net/api/GetShipmentData',
    headers: {
      'x-functions-key': String(process.env.REACT_APP_RAPID_API_KEY)
    }
  };
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
