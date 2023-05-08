import {Button, Container} from 'react-bootstrap';
//import lewis from '../Style/Assets/Images/Lewis.png';
const Home = () => {
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

                        <Container className='learn-more m-2 d-flex justify-content-center flex-row'>
                            <Button variant='none' className='custom-btn text-white m-3'>Learn More</Button>
                            <Button variant='none' className='custom-btn text-white m-3'>Buy PPV</Button>
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

            <Container className='content'></Container>
        </Container>
    )
}

export default Home;