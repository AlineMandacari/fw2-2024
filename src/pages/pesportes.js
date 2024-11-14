import { Container } from "react-bootstrap";
import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
export default function Pesportes() {
    return <>
    <Menu/>
    <Container className = "border border-sucess rounded-pill text-center col-sm-6">
    Lista de produtos de esportes
    </Container>
    <Container>
    Os produtos
    </Container>
    <Footer/>
    </>
}
