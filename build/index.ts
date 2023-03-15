import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 8000;

app.get('/api/getKey', async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = 'https://warehouse-apps.azurewebsites.net/api/GetShipmentData';
    const headers = {
      'x-functions-key': apiKey
    };
    const response = await axios.get(url, { headers });
    const data = response.data;
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});