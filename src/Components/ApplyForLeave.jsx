
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./css/Login.css";

export default function ApplyForLeave(){

    const disableDays = (date) => date.getDay() !== 0 && date.getDay() !== 6;
    const [leaveDate, setLeaveDate] = useState(
      new Date(+new Date() + 86400000)
    );

   return (
     <Container className="d-flex login">
       <form
         style={{
           padding: "40px",
           border: "2px solid #73AD21 ",
           backgroundColor: "white",
           borderRadius: "10px",
         }}
       >
         <h2>Apply For Leave</h2>
         <div className="form-group mb-3">
           <label>Select Date</label>
           <DatePicker
             id="leaveDate"
             className="form-group"
             filterDate={disableDays}
             placeholderText="Select a date"
             selected={leaveDate}
             onChange={(date) => setLeaveDate(date)}
             minDate={new Date(+new Date() + 86400000)}
             dateFormat="dd-MM-yyyy"
           />
         </div>
         <div className="form-group mb-3">
           <label>Reason </label>
           <textarea
             className="form-control"
             id="exampleFormControlTextarea1"
             rows="3"
           ></textarea>
         </div>

         <Button
           variant="primary"
           className="col-12 align-item-center"
           style={{}}
           type="submit"
         >
           Request Leave
         </Button>
       </form>
     </Container>
   );
}