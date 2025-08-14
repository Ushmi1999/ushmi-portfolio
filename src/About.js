import profilePic from './images/ushmi.jpg';

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <img 
        src={profilePic} 
        alt="Ushmi Nimsara" 
        style={{ width: '120px', borderRadius: '50%', marginBottom: '10px' }}
      />
      <p>
        I’m Ushmi Nimsara, a passionate and detail-oriented web developer with a strong foundation in creating responsive, user-friendly, and visually appealing websites. I enjoy turning ideas into functional and engaging digital experiences using technologies like HTML, CSS, JavaScript, and modern frameworks. With hands-on experience in both academic projects and real-world internships, I strive to write clean, efficient code while focusing on usability and performance. I’m always eager to learn new tools, embrace challenges, and collaborate with others to build impactful web solutions.
      </p>
    </section>
  );
}

export default About;