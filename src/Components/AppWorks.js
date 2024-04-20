import React from 'react';
import './appWorks.css';
import {Container , Row , Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const worksData = [
    {
        id:1,
        link:"https://www.google.com",
        image: require('../Assets/scenerio/01 (103).jpg'),
        title:"Tree"
    },
    {
        id:2,
        link:"https://www.google.com",
        image: require('../Assets/scenerio/1080p-wallpaper-image-hd-desktop-wallpapers-cool-images-hd.jpg'),
        title:"Road"
    },
    {
        id:3,
        link:"https://www.google.com",
        image: require('../Assets/scenerio/1093092-nature-background-hd-1920x1080-pictures.jpg'),
        title:"Sea shore"
    },
    {
        id:4,
        link:"https://www.google.com",
        image: require('../Assets/scenerio/ff.jpg'),
        title:"Nature"
    },
    {
        id:5,
        link:"https://www.google.com",
        image: require('../Assets/scenerio/images(10)_1559904728930.jpg'),
        title:"Nature trees"
    },
    {
        id:6,
        link:"https://www.google.com",
        image: require('../Assets/scenerio/images(4)_1559904727866.jpg'),
        title:"Night-light-Dining"
    },
    {
        id:7,
        link:"https://www.google.com",
        image: require('../Assets/scenerio/images[1][10] (2).jpg'),
        title:"Lilly"
    },
    {
        id:8,
        link:"https://www.google.com",
        image: require('../Assets/scenerio/images[1][11] (2).jpg'),
        title:"Roses"
    },
    {
        id:9,
        link:"https://www.google.com",
        image: require('../Assets/scenerio/images[1][12] (2).jpg'),
        title:"Building"
    },


]
function AppWorks(){
    return(
        <>
            <section>
                <Container>
                    <div>
                        <h2 className='text-center'>OUR WORKS</h2>
                    </div>
                    <div>
                        <p className='text-center'>Our awesome works</p>
                    </div>
                    <Row className='text-center'>
                        {
                            worksData.map(works=>{
                                return(
                                    <>
                                         <Col sm={4} key={works.id}>
                            <div>
                                <a href={works.link}>
                            <Image className='image-gallery' src={works.image}alt="scenerio"></Image>
                            
                            </a>
                            <div><h5>{works.title}</h5></div>
                            </div>
                        </Col>
                                    </>
                                )
                            })
                        }
                        
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default AppWorks;