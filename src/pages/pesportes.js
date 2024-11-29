import { Container, Table } from "react-bootstrap";
import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
export default function Pesportes() {
    return <>
        <Menu />
        <Container className="border border-sucess rounded-pill text-center col-sm-6">
            Lista de produtos de esportes
        </Container>
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Categoria</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        <Footer />
    </>
}
