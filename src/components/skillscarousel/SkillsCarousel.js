import Carousel from 'react-bootstrap/Carousel';
import img_placeholder from '../../imgs/black.png';
import isaiah from '../../imgs/Isaiah_Landin.jpg';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const skills = [1,2,3,4,5,5,7,8,9,10];
const styleCarousel = {
    marginBottom:  '3em'
};
const stylePicAspectRatio = {
    width:'300px',
    height: 'auto',
};

const SkillsCarousel = () => (
    <>
        <div style={styleCarousel}>
            <Carousel>
                <Carousel.Item>
                    <div className={'caro-back text-center py-5'}>
                        <div className={'photo-container mx-auto'}>
                            <img
                                className={'isaiah'}
                                style={stylePicAspectRatio}
                                src={isaiah}
                            />
                            <div className={'overlay'}>
                                <a href="https://www.linkedin.com/in/isaiah-landin-401a431a3/">
                                    <FontAwesomeIcon icon={faLinkedinIn} className={'linked-in-img'}/>
                                </a>
                            </div>
                        </div>

                        <h1>
                            My name is Isaiah Landin
                        </h1>
                        <h2>
                            A professional Hello World Programmer in  <b>ANY</b> language
                        </h2>
                    </div>
                </Carousel.Item>
                {skills.map(() => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img_placeholder}
                        />
                        
                        <Carousel.Caption>
                            <h1>Main Title</h1>
                            <h2>Description</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}  
            </Carousel>
        </div>
    </>
);

export default SkillsCarousel;