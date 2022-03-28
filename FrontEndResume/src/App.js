import React from 'react';
import MyNavbar from './components/mynavbar/MyNavbar';
import ExperienceCards from './components/experiencecards/ExperienceCards';
import SkillsCarousel from './components/skillscarousel/SkillsCarousel';
import MyFooter from './components/myfooter/MyFooter';
import MyOffcanvas from './components/myoffcanvas/MyOffcanvas';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <MyOffcanvas />
      <MyNavbar />
      <SkillsCarousel/>
      <Container>
        <h1 style={{'fontSize':'2.5rem'}}>Experience</h1>
        <ExperienceCards />
      </Container>
      <Container fluid className="bg-dark">
        <h1 className="text-light" style={{'fontSize':'2.5rem'}}>Education</h1>
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
