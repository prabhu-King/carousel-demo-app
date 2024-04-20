import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


function AppHero() {
    return (
        <>
            <section className="my-2">
                <Container fluid>
                    <Row className='justify-content-center'>
                        <Col lg={7}>
                    <Carousel>
                    <Carousel.Item>
                            
                            <img className='d-block w-100' src={require('../Assets/backgroung-images/images (7).jpeg')} alt="back-img"></img>
                        <Carousel.Caption>
                            <h3>Flower World</h3>
                            <p>Flowers always make people better, happier, and more helpful; they are sunshine, food, and medicine for the soul.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        
                            <img className='d-block w-100' src={require('../Assets/backgroung-images/images(31).jpg')} alt="back-img"></img>
                        <Carousel.Caption>
                            <h3>Full of roses</h3>
                            <p>If every tiny flower wanted to be a rose, spring would lose its loveliness.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        
                            <img className='d-block w-100' src={require('../Assets/backgroung-images/caa2654e79e2dc88c6a3c18e1a353452.jpg')} alt="back-img"></img>
                        <Carousel.Caption>
                            <h3>Path of Nature</h3>
                            <p>
                            If every tiny flower wanted to be a rose, spring would lose its loveliness.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                            
                            <img className='d-block w-100' src={require('../Assets/backgroung-images/images (6)_1595329807198.jpeg')} alt="back-img"></img>
                        <Carousel.Caption>
                            <h3>Flower Garden</h3>
                            <p>Happiness held is the seed; Happiness shared is the flower</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                            
                            <img className='d-block w-100' src={require('../Assets/backgroung-images/desktop-wallpaper-nature-background-super-high-resolution-nature.jpg')} alt="back-img"></img>
                        <Carousel.Caption>
                            <h3>Wonders of Nature</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                </Carousel>
                </Col>
                    </Row>
                </Container>
                
            </section>
        </>
    )
}
export default AppHero;