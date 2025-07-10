import { useState } from "react";
import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import AddModal from "../../components/addModal/AddModal";
import { products } from "../../data";
import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 150,
    editable: true,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
    editable: true,
  },
  { field: "price", type: "string", headerName: "Price", width: 200 },
  { field: "producer", type: "string", headerName: "Producer", width: 150 },
  { field: "createdAt", type: "string", headerName: "Created At", width: 100 },
  { field: "instock", type: "boolean", headerName: "In Stock", width: 100 },
];

function Products() {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <div className="subInfo">
          <h1>Products</h1>
          <button onClick={() => setOpen(true)}>Add New Product</button>
        </div>
        <div className="table">
          <DataTable slug="products" columns={columns} rows={products} />
          {open && (
            <AddModal slug="products" columns={columns} setOpen={setOpen} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
