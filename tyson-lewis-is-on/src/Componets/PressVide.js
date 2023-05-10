import { Container } from "react-bootstrap";


const PressVideo = (props) => {
    return(

        <Container>
            <video style={{height: "100%", width:"100%"}} controls autoPlay loop>
              <source src={props.videolink} type="video/mp4"/>
            </video>
        </Container>

    )
}

export default PressVideo;