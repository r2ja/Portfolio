import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import backgroundImage from '../assets/bg.jpg';
import profileImage from '../assets/me.png';
import resumePDF from '../assets/resume.pdf';

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TextContent = styled.div`
  flex: 1;
`;

const Greeting = styled.p`
  font-size: 18px;
  color: #888;
  margin-bottom: 5px;
`;

const Name = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const titleChange = keyframes`
  0%, 100% { opacity: 0; transform: translateY(20px); }
  20%, 80% { opacity: 1; transform: translateY(0); }
`;

const JobTitle = styled.h2`
  font-size: 48px;
  height: 30px;
  margin-bottom: 20px;
`;

const AnimatedTitle = styled.span`
  display: inline-block;
  animation: ${titleChange} 4s infinite;
`;

const CurrentWork = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.a`
  padding: 10px 20px;
  border: 2px solid #000;
  background-color: ${props => props.primary ? '#000' : 'transparent'};
  color: ${props => props.primary ? '#fff' : '#000'};
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.primary ? '#333' : '#eee'};
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const ProfileImage = styled.img`
  max-width: 50%;
  height: auto;
`;

const Home = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ['Student', 'AI Enthusiast', 'Esports Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HomeContainer>
      <ContentWrapper>
        <TextContent>
          <Greeting>Hello! I'm Raja Ata Ul Karim</Greeting>
          <JobTitle>
            <AnimatedTitle key={titleIndex}>{titles[titleIndex]}</AnimatedTitle>
          </JobTitle>
          <CurrentWork>Currently working at Logarithm Technologies</CurrentWork>
          <ButtonContainer>
            <Button as={Link} to="projects" smooth={true} duration={500}>Show Projects</Button>
            <Button href={resumePDF} download primary>Resume</Button>
          </ButtonContainer>
        </TextContent>
        <ImageContainer>
          <ProfileImage src={profileImage} alt="Raja Ata Ul Karim" />
        </ImageContainer>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;