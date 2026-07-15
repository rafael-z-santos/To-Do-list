import { useState } from "react";
import Menu from "./Menu";
import Tarrefas from "./Tarrefas";
import Form from "./Form";

function App() {
    //variavel de estado para controlar a abertura do formulário
     const [openForm, setOpenForm] = useState(false);

     function mostrarForm() {
        setOpenForm(true);
     }

     function fecharForm() {
        setOpenForm(false);
     }

    return (
        <div>
            <Menu mostrarForm={mostrarForm} />
            <Tarrefas />
            <Form isOpen={openForm} fechaForm={fecharForm} />
        </div>
    );
}

export default App;