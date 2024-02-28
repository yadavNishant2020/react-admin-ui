import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"

function Users() {
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
        <div className="table">
          <DataTable />
        </div>
      </div>
    </div>
  )
}

export default Users