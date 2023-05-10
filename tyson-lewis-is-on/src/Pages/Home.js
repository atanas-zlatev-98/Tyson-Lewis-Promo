import {Button, Container} from 'react-bootstrap';
import Stats from '../Componets/Stats';
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import PressVideo from '../Componets/PressVide';
import video from '../Style/Assets/Videos/TysonLewisPromo.mp4';
import Map from '../Componets/Map';
import { useRef } from 'react';

const Home = () => {

    const scrollToContent = useRef(null);
    const executeScroll = () => scrollToContent.current.scrollIntoView();
 

    const [vidOne, setVidOne] = useState(false);
    const [vidTwo, setVidTwo] = useState(false);
    const [vidThree, setVidThree] = useState(false);
    return(
        <Container className='home p-0 m-0'>
            <Container className='posters p-0 m-0 d-flex flex-column'>

                <Container className='poster-d p-0 m-0'>
                    <Container className='Lewis'>

                    </Container>

                    <Container className='middle-txt'>

                        <p className='top-text-poster m-0 p-0 orange'>WHERE WILL YOU BE WHEN HISTORY GOES DOWN?</p>
                            <h1 className='imp m-0 p-0'>
                                <span className='lewis-name'>LENNOX LEW<span className='orange'>IS</span></span><br/> 
                                <span className='tyson-name'>VS. MIKE TYS<span className='orange'>ON</span></span>
                            </h1>
                        <p className='bottom-text-poster m-0 p-0 orange'>WORLD HEAVYWEIGHT CHAMPIONSHIP</p>
                        <p className='imp m-0 p-0 last-poster'>SEE IT LIVE! SATURDAY, JUNE 8, 9PM ET/6PM PT</p>

                        <Container className='learn-more m-3 p-0 d-flex justify-content-center flex-row'>
                            <Button variant='none' className='custom-btn text-white me-3' onClick={executeScroll}>Learn More</Button>
                            <Button variant='none' className='custom-btn text-white ms-3'>Buy PPV</Button>
                        </Container>

                    </Container>
                    <Container className='Tyson'></Container>
                </Container>

                <Container className='poster-m m-0 p-0'>
                    <Container className='poster-m-img p-0 m-0'>

                    <Container className='middle-txt'>

<p className='top-text-poster m-0 p-0 orange'>WHERE WILL YOU BE WHEN HISTORY GOES DOWN?</p>
    <h1 className='imp m-0 p-0'>
        <span className='lewis-name'>LENNOX LEW<span className='orange'>IS</span></span><br/> 
        <span className='tyson-name'>VS. MIKE TYS<span className='orange'>ON</span></span>
    </h1>
<p className='bottom-text-poster m-0 p-0 orange'>WORLD HEAVYWEIGHT CHAMPIONSHIP</p>
<p className='imp m-0 p-0 last-poster'>SEE IT LIVE! SATURDAY, JUNE 8, 9PM ET/6PM PT</p>

<Container className='learn-more m-2 d-flex justify-content-center flex-row'>
    <Button variant='none' className='custom-btn text-white m-3'>Learn More</Button>
    <Button variant='none' className='custom-btn text-white m-3'>Buy PPV</Button>
</Container>

</Container>

                    </Container>
                    
                </Container>

            </Container>

            <Container className='stats m-0 p-0' ref={scrollToContent}>

                <Container className='tyson-stats'>
                    <Container className='tyson-stats-img'></Container>
                    <Container className='stats-tyson d-flex flex-column justify-content-center align-items-center'>
                        <Stats name='"Iron" Mike Tyson' age='35' height="5 ft 10 in (178 cm)" weight="110 kg" reach="71 in (180 cm)" stance="Peek-a-Boo" fights="54" won='49' kos="43" lost='3'></Stats>
                    </Container>
                </Container>

                <Container className='lewis-stats'>
                    <Container className='lewis-stats-img'></Container>
                    <Container className='stats-lewis d-flex flex-column justify-content-center'>
                    <Stats name='Lennox "The Lion" Lewis' age='36' height="6 ft 5 in (196 cm)" weight="116 kg" reach="84 in (213 cm)" stance="Orthodox" fights="42" won='39' kos="30" lost='2'></Stats>
                    </Container>
                </Container>

            </Container>

            <Container className='press'>
            <h2 className='text-white text-center p-3'> Press Conferences</h2>

            <Container className='press-videos'>
                <Container className='press-video-container p-0 m-2'>
                <Container id='press-video-styles' className='p-0' onClick={() => {setVidOne(true)}}>
                    <Container id='zoom' className='press-one' ></Container>
                </Container>
                <h3 className='text-white text-center pt-3'>Memphis</h3>
                </Container>
               <Container className='press-video-container p-0 m-2'>
               <Container id='press-video-styles' className='p-0 ' onClick={() => {setVidTwo(true)}}>
                <Container id='zoom' className='press-two' ></Container>
                </Container>
                <h3 className='text-white text-center pt-3'>MGM Grand</h3>
               </Container>
               <Container className='press-video-container p-0 m-2'>
               <Container id='press-video-styles' className='p-0 ' onClick={() => {setVidThree(true)}}>
                <Container id='zoom'  className='press-three'></Container>
                </Container>
                <h3 className='text-white text-center pt-3'>Las Vegas</h3>
               </Container>
               
            </Container>
           
            </Container>

           

            <Container className='PPV p-4 m-0 d-flex justify-content-center flex-column align-items-center'>
                <h2 className='text-center text-white pt-3'>Lewis–Tyson: Is On</h2>
                <h5 className='text-center text-white'>WBC, IBF, IBO, and The Ring Heavyweight Titles on the Line</h5>

                <p className='text-center text-white w-75 p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                     <h5 className='text-center text-white w-75 p-2'>SEE IT LIVE! SATURDAY, JUNE 8, 9PM ET/6PM PT</h5>

                     <Container className='ppv-buttons d-flex justify-content-center p-0 m-0'>
                     <Button variant='none' className='custom-btn text-white me-3'>Buy Tickets</Button>
                     <Button variant='none' className='custom-btn text-white me-3'>Watch Online</Button>
                     </Container>

            </Container>

            <Container className='event-map p-0 m-0'>
                <Map></Map>
            </Container>



















            <Container>

                <Modal size="lg" show={vidOne} onHide={() => setVidOne(false)} aria-labelledby="example-modal-sizes-title-lg" >
                <Modal.Header className='text-white' closeButton>Lewis–Tyson: Is On Memphis Conferences</Modal.Header>
                <Modal.Body>
                    <PressVideo videolink={video}/>
                </Modal.Body>
                </Modal>

                <Modal size="lg" show={vidTwo} onHide={() => setVidTwo(false)} aria-labelledby="example-modal-sizes-title-lg" >
                <Modal.Header className='text-white' closeButton>Lewis–Tyson: Is On MGM Grand Conferences</Modal.Header>
                <Modal.Body>
                <PressVideo videolink={video}/>
                </Modal.Body>
                </Modal>

                <Modal size="lg" show={vidThree} onHide={() => setVidThree(false)} aria-labelledby="example-modal-sizes-title-lg" >
                <Modal.Header className='text-white' closeButton>Lewis–Tyson: Is On Las Vegas Conferences</Modal.Header>
                <Modal.Body>
                <PressVideo videolink={video}/>
                </Modal.Body>
                </Modal>

            </Container>
        </Container>
    )
}

export default Home;