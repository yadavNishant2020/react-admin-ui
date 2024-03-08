import { GridColDef } from "@mui/x-data-grid"
import "./addModal.scss";

type Props = {
    slug: string,
    columns: GridColDef[],
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AddModal = (props: Props) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //add new item
        //axios post
    }
    return (
        <div className="add">
        <div className="modal">
            <span className="close" onClick={() => props.setOpen(false)}>X</span>
            <h1>Add New {props.slug}</h1>
            <form onSubmit={handleSubmit}>
                {props.columns.filter(item => item.field !== "id" && item.field !== "img")
                    .map(column => (
                        <div className="item">
                            <label>{column.headerName}</label>
                            <input type={column.type} />
                        </div>
                    ))}
                <button type="submit">Send</button>
            </form>
        </div>
        </div>
    )
}

export default AddModal