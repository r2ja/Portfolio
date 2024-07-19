import Card from "./card";
import profileImage from '../assets/img.jpg'

function Portfolio() {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <h3> Works </h3>
        <div>
          <Card
            image={profileImage}
            title="Digital Art-BGHG"
            subtitle="Yeah Yeah Yeah BOIIII"
            link="www.google.com"
          />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
