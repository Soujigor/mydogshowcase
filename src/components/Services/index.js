import React from "react";
import Manu1 from "../../images/Manu1.jpeg";
import Manu2 from "../../images/Manu2.jpeg";
import Manu3 from "../../images/Manu3.jpeg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="fotos">
      <ServicesH1>Algumas Fotos da Manu</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Manu1} />
          <ServicesH2>Carinha de Pedinte</ServicesH2>
          {/* <ServicesP>bla blaa bla</ServicesP> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Manu2} />
          <ServicesH2>Carinha de Perereca</ServicesH2>
          {/* <ServicesP>bla blaa bla</ServicesP> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Manu3} />
          <ServicesH2>Carinha de Idiota</ServicesH2>
          {/* <ServicesP>bla blaa bla</ServicesP> */}
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
