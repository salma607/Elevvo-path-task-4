import IMAGE from '../../assets/ppp.jpg';
import { useState } from 'react';

const containerStyle = {
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center'
};

const leftDivStyle = {
  flex: 1,
  padding: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
};

const H1Style = {
  background: "var(--color-gradient)",
  backgroundClip: "text",
  TextFillColor: "transparent",
  color: "transparent",
  fontSize: "60px",
  fontWeight: "bold",
};

const rightDivStyle = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
};

const imageStyle = {
  maxWidth: '70%',
  height: 'auto',
  borderRadius: '8px',
  boxShadow: '10px 20px 30px var(--color-pink)', // Use a specific color variable
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

// Optional hover effect


export default function Profile() {
  const [ setIsHovered] = useState(false);

  return (
    <section id="home">
    <div style={containerStyle}>
      {/* Left Side Div */}
      <div style={leftDivStyle}>
        <h1 style={H1Style}>Frontend Developer with a keen eye for design</h1>
      </div>

      {/* Right Side Picture */}
      <div style={rightDivStyle}>
        <img
          src={IMAGE}
          alt="Right Side"
          style={{
            ...imageStyle
            
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </div>
    </section>
  );
}