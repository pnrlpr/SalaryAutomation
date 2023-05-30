

const Card = (props) =>{
    return (

        // Bu oluşturulan Card komponenti kart yapısı olarak her yerde kullanılabilir.
        // Fakat bir karta spesifik bir özellik vermek istersek proplarla yapılır
        // örneğin ekranda en üstteki karta margin-top vermek istersek, AddWorker içinde addClass olarak mt-10 verdik
        // Daha sonra bu addClass'ı burada ana Card komponentine prop olarak geçtik
        // Bunu da şu şekilde sağladık: ${props.addClass}
        
        <div className={`bg-white p-5 rounded-xl ${props.className}`}>{props.children}</div>
    )
}

export default Card