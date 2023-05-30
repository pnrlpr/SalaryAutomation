import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddWorker = (props) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");
  const [error, setError] = useState();

  const minimumWage = 5000;

  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (enteredWorkerName.trim().length === 0) {
      setError({
        title: "Name is Required!",
        message: "Please enter a name",
      });

      return;
    }

    if (+enteredWage < minimumWage) {
      //yukarıda useState'de enteredWage string olarak vermiştik. Number olması için başına + koyduk.
      setError({
        title: "Wage is required!",
        message: `Please enter a wage value greater than ${minimumWage}`,
      });
      return;
    }

    // setEnteredWorkerName("")  ve setEnteredWage("") bunları yazınca
    // butona bastıktan sonra inputların içi sıfırlanıyor!!!

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredWorkerName,
        wage: enteredWage,
      },
      ...prevState,
    ]);
    setEnteredWorkerName("");
    setEnteredWage("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    //! bu projede tim css classları için tailwind kullanıldı
    <div>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      {/* Eğer error true ise ErrorModal'ı çağır demek */}

      <Card className="mt-10">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label htmlFor="name" className="font-medium">
            Worker Name
          </label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Enter Worker Name"
            id="name"
            onChange={(e) => setEnteredWorkerName(e.target.value)}
            value={enteredWorkerName}
          />
          <label htmlFor="wage" className="font-medium">
            Wage Amount
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Enter Wage Amount"
            id="wage"
            onChange={(e) => setEnteredWage(e.target.value)}
            value={enteredWage}
          />
          <Button className="mt-2 rounded" type="submit">
            Add
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddWorker;
