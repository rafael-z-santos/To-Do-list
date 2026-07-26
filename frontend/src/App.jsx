import { useState } from "react";
import Menu from "./Menu";
import Feed from "./Feed";
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
            <Feed />
            <Form isOpen={openForm} fechaForm={fecharForm} />
        </div>
    );
}

export default App;