import { useEffect, useState } from "react";
type About = {
  id: number;
  mission: String;
  manifesto: String;
  img1: string;
  img2: string;
  img3: string;
};
export function About() {
  const [about, setAbout] = useState<About[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/about")
      .then((resp) => resp.json())
      //@ts-ignore
      .then((abouFromServer) => setAbout(abouFromServer));
  }, []);
  return (
    <div className="about">
      <header className="about_header">
        <h2>About</h2>
        <ul>
          <li className="namelist">WRIGLEYVILLE</li>
          <li>MON-THUR 4PM TO LATE</li>
          <li>FRI-SUN 11AM TO LATE</li>
        </ul>
        <ul>
          <li className="namelist">WICKER PARK</li>
          <li>EVERYDAY 11AM TO LATE</li>
        </ul>
        <ul>
          <li className="namelist">DELIVERY</li>
          <li>MON TO THURS 4PM - 12AM</li>
          <li>FRI 11AM - 2AM</li>
          <li>SAT 11AM - 3AM</li>
          <li>SUN 11AM - 12AM</li>
        </ul>
      </header>
      <main>
        {about.map((singleabout) => (
            <div className="main--section">
          <div className="text-section">
            <h2>The GetYourPiZZa's Mission</h2>
            <p>{singleabout.mission}</p>
            <h2>The GetYourPiZZa's Manifesto</h2>
            <p>{singleabout.manifesto}</p>
            </div>

            <div className="image">
              <img src={singleabout.img1} alt="photo" />
              <img src={singleabout.img2} alt="photo" />
              <img src={singleabout.img3} alt="photo" />
          </div>
          </div>
        ))}
      </main>
    </div>
  );
}
