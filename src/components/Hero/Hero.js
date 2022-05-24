import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a passionate web developer with 2 years of experience
        building websites for organizations and companies at a
        professional level. My experience with software development is
        primarily JavaScript. I am creative and detail-oriented in
        designing platforms that are functional and user-friendly.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/martinKar-web'}>Download Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
