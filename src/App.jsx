import { useState } from "react";
import Menu from "./Menu";
import Tarrefas from "./Tarrefas";
import Form from "./Form";

function App() {
     const [openForm, setOpenForm] = useState(false);

     function mostrarForm() {
        setOpenForm(true);
     }

    return (
        <div>
            <Menu mostrarForm={mostrarForm} />
            <Tarrefas />
            <Form isOpen={openForm} />
        </div>
    );
}

export default App;