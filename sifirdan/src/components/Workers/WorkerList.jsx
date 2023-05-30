//bu komponenti app.jsx den çağırıyoruz

import Card from "../UI/Card"

const WorkerList = (props) => {
  const { workers } = props;
  console.log(workers);
  return (
    <Card className="mt-10">
       <ul>
        <li className="flex justify-between p-2">
            <span className="font-bold">İsim</span>
            <span className="font-bold">Maaş</span>
        </li>
            {workers.map((worker)=> (
            <li className="flex justify-between cursor-pointer hover:shadow-xl p-2 transition-shadow" key={worker.id}>
                 <span>Pınar</span>
                 <span className="text-teal-700 font-med">5555TL</span>

            {/* Bu şekilde hata veriyor. Hatanın gitmesi için çağırdığımız yerde workers'a boş bir array oluştur! */}
            
            </li>
            ))}
       </ul>
    </Card>
  )
}

export default WorkerList