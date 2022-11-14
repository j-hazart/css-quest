import styled from "styled-components"

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100vh;
  width: 100vw
`;

const Card = styled.div`
  display: flex;
  gap: 1rem;
  height: 20rem;
  width: 50rem;
  background-color: #f5f5f5;
`;

const Img = styled.img`
  height: 20rem;
  widht: auto;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;
const IngredientAndMeasures = styled.div`
  display: flex;
  gap: 2rem;
`;

const Ul = styled.ul`
  list-style-type: none;
`;
function App() {

  return (
    <Page>
     <Card>
      <Img src="https://www.thecocktaildb.com/images/media/drink/ido1j01493068134.jpg" />
     
      <Section>
        <h2>Arizona Twister</h2>
        <IngredientAndMeasures>
          <Ul>
            <li>Vodka</li>
            <li>Malibu rum</li>
            <li>Gold tequila</li>
            <li>Orange juice</li>
            <li>Pineapple juice</li>
            <li>Cream of coconut</li>
            <li>Grenadine</li>
            <li>Ice</li>
            <li>Pineapple</li>
          </Ul>
          <Ul>
            <li>1 shot</li>
            <li>1 shot</li>
            <li>1 shot</li>
            <li>1 splash</li>
            <li>1 splash</li>
            <li>1 splash</li>
            <li>1 dash</li>
            <li>crushed</li>
            <li>1 wedge</li>
          </Ul>
        </IngredientAndMeasures>
        <p>Just mix in the shots of rum, vodka, and tequila. 
          Add splashes of the three juices, heavy on the pineapple. 
          Top off with grenadine. Crushed ice should already be in glass. 
          Top off the glass with a pineapple wedge.</p>
      </Section>
     </Card>
    </Page>
  )
}

export default App
