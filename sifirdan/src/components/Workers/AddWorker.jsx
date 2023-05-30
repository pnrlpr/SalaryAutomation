import { useState } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"


const AddWorker = (props) => {
    const [enteredWorkerName, setEnteredWorkerName] = useState("");
    const [enteredWage, setEnteredWage] = useState("");

    const minimumWage = 5000;

    const addWorkerHandler = (e) =>{
    e.preventDefault();
    if(enteredWorkerName.trim().length === 0 || enteredWage.trim().length === 0){
        return;
    }

    if(+enteredWage<minimumWage){
        //yukarıda useState'de enteredWage string olarak vermiştik. Number olması için başına + koyduk.
        return;
    }
    

    // setEnteredWorkerName("")  ve setEnteredWage("") bunları yazınca 
    // butona bastıktan sonra inputların içi sıfırlanıyor!!!

    props.setWorkers((prevState) => [
    {
        id: Math.floor(Math.random()*1000),
        name: setEnteredWorkerName,
        wage: setEnteredWage,
    },
    ...prevState,
    ]);
    setEnteredWorkerName("");
    setEnteredWage("");
    };

return (

        //! bu projede tim css classları için tailwind kullanıldı
<Card className="mt-10">
<form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
            <label htmlFor="name" className="font-medium">Çalışan İsmi</label>
            <input type="text" className="max-w-[40rem] w-full mx-auto border p-2" placeholder="Çalışan İsmi Giriniz" 
            id="name" onChange={(e) => setEnteredWorkerName(e.target.value)} value={enteredWorkerName}/>
            <label htmlFor="wage" className="font-medium" >Maaş Miktarı</label>
            <input type="number" className="max-w-[40rem] w-full mx-auto border p-2" placeholder="Maaş Giriniz" 
            id="wage" onChange={(e)=> setEnteredWage(e.target.value)} value={enteredWage}/>
            <Button className="mt-2" type="submit">Ekle</Button>
        </form>
</Card>
     
    )
}

export default AddWorker