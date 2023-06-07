import Button from "./Button";
import Card from "./Card";
import React from "react";
import ReactDOM from "react-dom";

//Portal uygulamak için önce ErrorModal içindeki Backdrop ve ModalOverlay olarak 2 ayrı komponente böldük!
//Sonra index.html de backdrop-root id'li yeni div açtık.
//SOnra ErrorModal içinde reactDOM olan satırı yazdık
//Bu Backdrop komponentinin hani portalda gösterileceğini belirtir

const Backdrop = (props) => {
  return (
    <div
      className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0 left-0"
      onClick={props.onConfirm}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="error-modal">
      <Card className="w-[36rem] p-0 z-20">
        {/* Card komponentine z-20 yani z indexinde 20 birim öne çıksın dedik. Bu nedenle blur alanın önünde görünüyor! */}
        <header className="bg-red-700 p-4 rounded-t-xl ">
          <h2 className="text-center text-xl text-white">{props.title}</h2>
        </header>
        <section className="p-2">{props.message}</section>
        <footer className="p-2 flex justify-end">
          <Button className="rounded w-32" onClick={props.onConfirm}>
            Done!
          </Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {
  const { onConfirm, error } = props;
  const { title, message } = error;
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
