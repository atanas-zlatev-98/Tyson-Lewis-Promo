import { Container } from "react-bootstrap"

const Map = () => {

    return (

        <Container className="map-container p-0 m-0">
            <div className="map-style">
                <div id="embed-ded-map-canvas">
                    <iframe className="map-iframe" frameBorder="0" title="maps" src="https://www.google.com/maps/embed/v1/place?q=Memphis+Pyramid,+Мемфис,+Tennessee,+Съединени+щати&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div>
                    </div>
        </Container>

    )
}
export default Map