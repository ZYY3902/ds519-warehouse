import { ShipmentInfo } from "./api_types";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef} from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'Date', headerName: 'Date', width: 150 },
  { field: 'WarehouseID', headerName: 'WarehouseID', width: 305 },
  { field: 'ShippingPO', headerName: 'ShippingPO', width: 305 },
  { field: 'ShipmentID', headerName: 'ShipmentID', width: 100 },
  { field: 'BoxesRcvd', headerName: '# BoxesRcvd', width: 100 }
];

/**
 * This is the component where you should write the code for displaying the
 * the table of grades.
 *
 * You might need to change the signature of this function.
 *
 */
export const ReportTable = ({shipments =[]} : {shipments:ShipmentInfo[]}) => {
  return (
    <div>
      <Box sx={{ height: 400, width: '123%' }}>
      <DataGrid
        rows={shipments}
        columns={columns}
        getRowId={(row) => row.ShipmentID}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </Box>
    </div>
  );
};
