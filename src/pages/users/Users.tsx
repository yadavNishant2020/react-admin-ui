// const rows: GridRowsProp = [
//   //   { id: 1, col1: 'Hello', col2: 'World', status: true },
//   //   { id: 2, col1: 'DataGridPro', col2: 'is Awesome', status: false },
//   //   { id: 3, col1: 'MUI', col2: 'is Amazing', status: true },
//   // ];


import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"
import { userRows } from "../../data";

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150, editable: true},
  { field: 'status', headerName: 'Status', width: 100, type:'boolean'},
  { field: 'col2', headerName: 'Column 2', width: 150, editable: true},
  { field: 'col2', headerName: 'Column 2', width: 150, editable: true},
];
function Users() {
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
        <div className="table">
          <DataTable columns={columns} rows={userRows} />
        </div>
      </div>
    </div>
  )
}

export default Users