import React from 'react';
import { useState } from "react"
import {Grid, TextField, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import { API_URL } from "./globals";
import { ReportTable } from "./ReportTable";
import { ShipmentInfo } from "./api_types";
 

function App() {
  //const [apiKey, setapiKey] = useState<string>("");
  const [shipment, setShipment] = useState<ShipmentInfo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const getapiKey = async () => {
    const response = await fetch('/api/getKey');
    const body = await response.json();
    // if (response.status !== 200) {
    //   throw Error(body.message) 
    // }
    return body;
  };

  const fetchDataByID = async (shipperId:string) => {
    const res = await fetch(API_URL + "&id=" + shipperId, {
      method: "GET",
      headers: ({
        'Content-Type': 'application/json',
        'x-functions-key': String(getapiKey)
      })
    });
    const json = await res.json() as ShipmentInfo[];
    setShipment(json);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Grid container style={{ padding: "2rem" }}>
        <Grid>
          <Typography variant="h4" gutterBottom>
            Report 
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="h5" gutterBottom>
            Shipper ID:
          </Typography>
          <TextField
          label="Input field"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          />
          <Button onClick={() => fetchDataByID(inputValue)}>SUBMIT</Button>
        </Grid>
        <Grid>
          <Typography variant="h5" gutterBottom>
            Shipping Boxes Received Items:
          </Typography>
          <div>
          <ReportTable shipments={shipment}/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
