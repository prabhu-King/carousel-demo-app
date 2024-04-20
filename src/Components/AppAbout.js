import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
const flowers = 60;
const wonders = 40;
const nature = 90;
function AppAbout() {
    return (
        <>
            <section>
                <Container>
                    <div>
                        <h2 className='text-center'>ABOUT US</h2>
                        <p className='text-center'>--Tell me and I forget, teach me and I may remember, involve me and I learn.--</p>
                    </div>
                    <Row>
                        <Col sm={6}>
                            <Image src={require('../Assets/backgroung-images/images (8).jpeg')} width={500} height={300} />
                        </Col>
                        <Col sm={6}>
                            <p>The more that you read, the more things you will know. The more that you learn, the more places you’ll go.Live as if you were to die tomorrow. Learn as if you were to live forever.Leadership and learning are indispensable to each other.Bodily exercise, when compulsory, does no harm to the body but knowledge which is acquired under compulsion obtains no hold on the mind.</p>
                            <div>
                                <h2>Flowers</h2>
                                <ProgressBar now={flowers} label={`${flowers}%`}/>
                                <h2>Wonders</h2>
                                <ProgressBar now={wonders} label={`${wonders}%`}/>
                                <h2>Nature</h2>
                                <ProgressBar now={nature} label={`${nature}%`}/>
                            </div>
                        </Col>

                    </Row>

                </Container>

            </section>
        </>
    )
}
export default AppAbout;