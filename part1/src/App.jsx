import "./App.css";
import Mensaje from "./Mensaje.jsx";

const Description = () => {
  return <p>Esta es la app del curso de fullstack Camp</p>;
};

const App = () => {
  return (
    <>
      <div>
        <Mensaje message="Estamos trabajando" />
        <Mensaje message="En un nuevo" />
        <Mensaje message="Proyecto" />
        <Description />
      </div>
    </>
  );
};

export default App;
