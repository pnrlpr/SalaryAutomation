import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  const { onConfirm, error } = props;
  const { title, message } = error;
  return (
    <div className="error-modal">
      <div
        className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0"
        onClick={onConfirm}
      ></div>
      <Card className="w-[36rem] p-0 z-20">
        {/* Card komponentine z-20 yani z indexinde 20 birim öne çıksın dedik. Bu nedenle blur alanın önünde görünüyor! */}
        <header className="bg-red-700 p-4 rounded-t-xl ">
          <h2 className="text-center text-xl text-white">{title}</h2>
        </header>
        <section className="p-2">{message}</section>
        <footer className="p-2 flex justify-end">
          <Button className="rounded w-32" onClick={onConfirm}>
            Done!
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
