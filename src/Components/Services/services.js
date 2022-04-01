import React from 'react';
import { ServicesContainer, ServicesWrapper, 
 Card1, Card1Image, Card1Background, Card1Content, Card1Text, Card1H1, 
 Card2, Card2Background, Card2Image, Card2Text, Card2Content, Card2H1,
 Card3, Card3Background, Card3Image, Card3Text, Card3Content, Card3H1
} from './ServicesElements';

import Icon1 from '../../Pictures/pomiary.jpg'
import Icon2 from '../../Pictures/podzial2.jpg'
import Icon3 from '../../Pictures/mapyProjektowe.jpg'


const Services = () => {
  return (
    <>
    <ServicesContainer id="services">        
        <ServicesWrapper> 

        
              <Card1>
              <Card1Content>
                      <Card1H1>POMIARY</Card1H1>
                        <Card1Background>
                            <Card1Image src={Icon1}></Card1Image>
                        </Card1Background>
                        <Card1Text>
                        Inwentaryzacja powykonawcza budynków.
                        Pomiary objętości mas ziemnych.
                        Pomiary i inwentaryzacje pomieszczeń.
                        </Card1Text>
                    </Card1Content>
              </Card1>
              <Card2>
                  <Card2Content>
                      <Card2H1>OBŁUGA INWESTYCJI</Card2H1>
                      <Card2Background>
                          <Card2Image src={Icon2}></Card2Image>
                      </Card2Background>`
                        <Card2Text>
                        Wytyczanie na gruncie projektów budowli (budynków,
                        mostów, dróg, kolei itp.) oraz kontrola ich funkcjonowania (pomiary odkształceń
                        i przemieszczeń).
                        </Card2Text>
                  </Card2Content>
              </Card2>
              <Card3>
                <Card3Content>
                  <Card3H1>MAPY PROJEKTOWE</Card3H1>
                  <Card3Background>
                      <Card3Image src={Icon3}></Card3Image>
                  </Card3Background>
                    <Card3Text>
                    Opisywanie powierzchni ziemi 
                    w zakresie przestrzennego rozmieszczenia obiektów
                    naturalnych i sztucznych oraz rzeźby terenu.
                    Opis podziemnej infrastruktury technicznej 
                    (kanalizacja, wodociągi, energetyka,telekomunikacja, gaz itp.).
                    </Card3Text>
                </Card3Content>
              </Card3>                  
         </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}

export default Services;