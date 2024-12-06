import { Container, Table } from "react-bootstrap";
import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
export default function Pesportes({produtos}) {
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
                    {produtos.map(abobrinha =>
                    <tr>
                        <td>{abobrinha.id}</td>
                        <td>{abobrinha.titulo}</td>
                        <td>{abobrinha.categoria}</td>
                        <td>{abobrinha.descricao}</td>
                        <td>{abobrinha.preco}</td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </Container>
        <Footer />
    </>
}
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('http://localhost:3000/api/produtos/data')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { produtos: repo } }
}