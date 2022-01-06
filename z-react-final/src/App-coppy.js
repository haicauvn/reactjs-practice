import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import MeetingForm from "./components/MeetingForm/MeetingForm";
import data from "../src/data/data.json";
import { useState } from "react";
function App() {
  const [calendar, setCalendar] = useState([...data]);
  const [infoEdit, setInfoEdit] = useState("");

  const addItem = (info) => {
    console.log(info)
    const newCalendar = [...calendar];
    const index = calendar.findIndex((e) => e.day == info.day);
    let newMeetings = calendar[index].meetings;
    const id = generateRandom();
    newMeetings = [...newMeetings, { ...info, id }];
    newCalendar[index].meetings = newMeetings;
    setCalendar(newCalendar);
  };

  const generateRandom = () => {
    return Math.floor(Math.random() * 1000000 + Math.random() * 10009);
    // return +users[users.length - 1].id + 1;
  };

  const onDelete = ({ day, id }) => {
    console.log(day, id);
    const newCalendar = [...calendar];
    const index = newCalendar.findIndex((e) => e.day === day);
    newCalendar[index].meetings = newCalendar[index].meetings.filter(
      (e) => e.id !== id
    );
    setCalendar(newCalendar);
  };

  const onEdit = (info) => {
    setInfoEdit(info);
  };

  const onCancel = (info) => {
    setInfoEdit("");
  };

  const editItem = (info) => {
    console.log("infoItem", info);
    const newCalendar = [...calendar];
    const index = calendar.findIndex((e) => e.day === info.day);

    let newMeetings = newCalendar[index].meetings;
    const indexMettings = newMeetings.findIndex((e) => e.id === info.id);
    newMeetings[indexMettings] = { ...newMeetings[indexMettings], ...info };

    newCalendar[index].meetings = newMeetings;
    setCalendar(newCalendar);
  };

  return (
    <>
      <div className="container">
        <MeetingForm
          infoEdit={infoEdit}
          onEdit={onEdit}
          editItem={editItem}
          addItem={addItem}
          onCancel={onCancel}
        />
        <Calendar calendar={calendar} onDelete={onDelete} onEdit={onEdit} />
      </div>
    </>
  );
}

export default App;
