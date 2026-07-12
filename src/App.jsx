import { useState } from "react";
import Menu from "./Menu";
import Tarrefas from "./Tarrefas";
import Form from "./Form";

function App() {

    /*pagina → guarda qual tela deve ser exibida; setPagina() → muda o valor de pagina; "lista" → é o valor inicial quando a aplicação é aberta.*/
    const [pagina, setPagina] = useState("lista"); 
    let conteudo;

    function mostrarLista() {
        setPagina("lista");
    }

    function mostrarFormulario() {
        setPagina("form");
    }

    /*compara a pagina com a lista e coloca a pagina no conteudo*/
    if (pagina === "lista") {
        conteudo = <Tarrefas />;
    } else {
        conteudo = <Form />;
    }

    return (
        <div>
            /*chama a função menu com os parametros de mostrarLista e mostrarFormulario*/
            <Menu mostrarLista={mostrarLista} mostrarFormulario={mostrarFormulario}/> 
            
            /*mostra a pagina que ta na variavel conteudo*/
            {conteudo}
        </div>
    );
}

export default App;