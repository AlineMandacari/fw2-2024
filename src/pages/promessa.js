import { Container } from "react-bootstrap"
import Menu from "./modulos/navbar"
import Footer from "./modulos/footer"
import { useState } from "react";

export default function Promessa(){
   const [pao, setpao] = useState("");
    setTimeout(() => {
        document.title = "Promessa é dívida"
        setpao(mudaPao("é dívida"));
    }, 4000);
    return <>
        <Menu />
        <Container>
            Promessa{pao==="" ? <img src= "./loading.gif" width={30} height={20} /> : pao}
        </Container>
        <Footer />
    </>
}
function mudaPao(texto){
    setTimeout(() => {
       return (texto) 
    }, 10);
}