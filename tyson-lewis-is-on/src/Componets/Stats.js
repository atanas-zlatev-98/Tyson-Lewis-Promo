import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

const Stats = (props) => {
    return(
        <Container className="text-white imp text-center mt-5">

<Table size="sm" className="text-white poppins">
      <thead>
        <tr className="tr-hover table-stats">
          <th colSpan={3}>{props.name}</th>
        </tr>
      </thead>
      <tbody className="table-stats">
        <tr className="tr-hover">
          <td>Age</td>
          <td>{props.age}</td>
        </tr>
        <tr className="tr-hover">
          <td>Height </td>
          <td>{props.height}</td>
        </tr>
        <tr className="tr-hover">
          <td>Weight </td>
          <td>{props.weight}</td>
        </tr>
        <tr className="tr-hover">
          <td>Reach</td>
          <td>{props.reach}</td>
        </tr>
        <tr className="tr-hover">
          <td >Stance</td>
          <td>{props.stance}</td>
        </tr>
        <tr className="tr-hover">
          <td>Fights</td>
          <td>{props.fights}</td>
        </tr>
        <tr className="tr-hover">
          <td>Fights Won</td>
          <td>{props.won}</td>
        </tr>
        <tr className="tr-hover">
          <td>KOs</td>
          <td>{props.kos}</td>
        </tr>
        <tr className="tr-hover">
          <td>Lost</td>
          <td>{props.lost}</td>
        </tr>

      </tbody>
    </Table>
        </Container>

    )
}

export default Stats;