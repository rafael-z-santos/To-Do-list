import { useState } from "react";
import Menu from "./Menu";
import Feed from "./Feed";
import Form from "./Form";
import FormCard from "./FormCard";
import "./App.css";

function App() {
    //variavel de estado para controlar a abertura do formulário de criação de listas
     const [openForm, setOpenForm] = useState(false);

     function mostrarForm() {
        setOpenForm(true);
     }

     function fecharForm() {
        setOpenForm(false);
     }

     //form para atividades/tarrefas
     const [openFormCard, setOpenFormCard] = useState(false);

      function mostrarFormCard() {
        setOpenFormCard(true);
     }

     function fecharFormCard() {
        setOpenFormCard(false);
     }

    return (
        <div className="app-shell">
            <Menu mostrarForm={mostrarForm} />
            <Feed mostrarFormCard={mostrarFormCard}/>
            <Form isOpen={openForm} fechaForm={fecharForm} />
            <FormCard isOpenForm={openFormCard} fechaForm={fecharForm}/>
        </div>
    );
}

export default App;