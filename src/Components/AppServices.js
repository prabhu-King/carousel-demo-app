import React from 'react';
import './appServices.css';
import { Container,Row,Col } from 'react-bootstrap';
import { FaAnchorLock,FaWater, FaBuilding } from 'react-icons/fa6';


function AppServices(){
    return(
        <>
            <section>
                <Container>
                    <div>
                        <h3 className='text-center'>OUR SERVICES</h3>
                    </div>
                    <div>
                        <p className='text-center'>__Services are provide__</p>
                    </div>
                    <Row>
                        <Col sm={4}>
                            <div><FaAnchorLock className='icon'></FaAnchorLock></div>
                            <h6>Anchor Lock</h6>
                            <p>Ever wonder what “anchor-lock” might look like in the mix? Well, you're in luck! We've cooked up some examples of how you could use the “anchor-lock” icon in your projects, whether they're apps, interfaces, or print designs.</p>
                        </Col>
                        <Col sm={4}>
                            <div><FaWater className='icon'></FaWater>
                            <h6>Water</h6>
                            <p>Water is the driving force of all nature. World Water Day is celebrated on March 22 every year. The day is used to advocate for the sustainable management of freshwater resources.</p></div>
                        </Col>
                        <Col sm={4}>
                            <div><FaBuilding className='icon'></FaBuilding>
                            <h6>Building</h6>
                            <p>Water is the driving force of all nature. World Water Day is celebrated on March 22 every year. The day is used to advocate for the sustainable management of freshwater resources.</p></div>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <div><FaAnchorLock className='icon'></FaAnchorLock></div>
                            <h6>Anchor Lock</h6>
                            <p>Ever wonder what “anchor-lock” might look like in the mix? Well, you're in luck! We've cooked up some examples of how you could use the “anchor-lock” icon in your projects, whether they're apps, interfaces, or print designs.</p>
                        </Col>
                        <Col sm={4}>
                            <div><FaWater className='icon'></FaWater>
                            <h6>Water</h6>
                            <p>Water is the driving force of all nature. World Water Day is celebrated on March 22 every year. The day is used to advocate for the sustainable management of freshwater resources.</p></div>
                        </Col>
                        <Col sm={4}>
                            <div><FaBuilding className='icon'></FaBuilding>
                            <h6>Building</h6>
                            <p>Water is the driving force of all nature. World Water Day is celebrated on March 22 every year. The day is used to advocate for the sustainable management of freshwater resources.</p></div>
                        </Col>
                        
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default AppServices;