import { useState } from "react"

const [apiKey, setapiKey] = useState<string>("");
export const API_URL = "https://warehouse-apps.azurewebsites.net/api/GetShipmentData?code=";
// This is a helper function to generate the headers with the x-functions-key attached

const callBackendAPI = async () => {
  const response = await fetch('/api/getKey');
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(body.message) 
  }
  setapiKey(body)
};
export const GET_DEFAULT_HEADERS = () => {
  var headers = new Headers();
  // You will need to add another header here
  // If you do not, the API will reject your request (:
  headers.append('Content-Type', 'application/json');
  headers.append('x-functions-key', apiKey);
  return headers;
};
