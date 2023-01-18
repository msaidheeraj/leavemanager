import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
export default function LeaveList() {
  const [records, setRecords] = useState("");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getRecords = async () => {
    const response = await fetch(`http://localhost:57845/api/Records/`);
    const records = await response.json();

    setRecords(records);
  };
  useEffect(() => {
    getRecords();
  }, []);

  return (
    <div className="col-10 ml-auto mr-auto mt-3">
      <h2 className="col-4 m-auto p-3">Your leave history</h2>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">ProjectName</th>
            <th scope="col">ProjectManager</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => {
            const {
              id,
              projectName,
              projectManager,
              auditType,
              status,
              points,
            } = record;
            return (
              <tr
                className={
                  status == "approved"
                    ? "table-success"
                    : status == "rejected"
                    ? "table-danger"
                    : "table-warning"
                }
              >
                <td>{id}</td>
                <td>{projectName}</td>
                <td>{projectManager}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
