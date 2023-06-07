import { useState } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";
import React from "react";

//! bu projede tim css classları için tailwind kullanıldı

function App() {
  const [workers, setWorkers] = useState([]);
  return (
    <React.Fragment>
      {/*  AddWorker aşağıdan seçip Ctrl + space yaparsan otomatik import ediyor */}
      <h1 className="text-white text-center mt-6 text-3xl">Maaş Otomasyonu</h1>
      <AddWorker setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />
    </React.Fragment>
  );
}

export default App;
