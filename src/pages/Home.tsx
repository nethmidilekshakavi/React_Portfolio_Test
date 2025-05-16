import './home.css';
import './about.css'
import './projects.css'
import './contact.css'
import './footer.css'


const Home = () =>{

  return (

      <>

          <div className="welcome-container">
              <h1>Welcome to My Portfolio</h1>
              <p>Hi, I'm <span>Nethmi Dileksha</span></p>
              <p>Front-End Developer | Designer | Learner</p>
              <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQFNvblZ9OvuDQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721821439526?e=1752710400&v=beta&t=X1bLbdbdypZWGwMmT1FE8fEeNc45trhGvK7SbrgbOmE"
                  alt=""/>
          </div>


          <div className="about-container">
              <h1>About Me</h1>

              <img
                  src="../assets/WhatsApp%20Image%202025-05-16%20at%2011.31.34_e5274da8.jpg"  // update with your correct image path
                  alt="Profile"
                  className="profile-photo"
              />

              <p>
                  I'm <strong>Nethmi Dileksha</strong>, a passionate Front-End Developer dedicated to crafting clean
                  and user-friendly web interfaces. I enjoy turning ideas into interactive digital experiences.
              </p>
              <p>
                  I love learning new technologies, improving my design skills, and working on creative projects that
                  challenge me to grow.
              </p>
          </div>

          <div className="projects-container">
              <h1>My Projects</h1>

              <div className="project-grid">
                  <div className="project-card">
                      <h3>Travel Booking System</h3>
                      <p>A full-stack web app with Spring Boot and React to book tours and transport online.</p>
                  </div>

                  <div className="project-card">
                      <h3>Candle Shop Website</h3>
                      <p>An e-commerce site for handmade candles built using Spring Boot and JavaScript.</p>
                  </div>

                  <div className="project-card">
                      <h3>Clothing Store UI</h3>
                      <p>Modern front-end UI for a clothing shop using HTML, CSS, and JavaScript.</p>
                  </div>

                  {/* Add more project cards here */}
              </div>
          </div>

          <div className="contact-container">
              <h1>Contact Me</h1>

              <form className="contact-form">
                  <input type="text" placeholder="Your Name" required/>
                  <input type="email" placeholder="Your Email" required/>
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                  <button type="submit">Send Message</button>
              </form>
          </div>


          <footer className="footer">
              <p>© 2025 Nethmi Dileksha. All rights reserved.</p>
              <div className="social-icons">
                  <a href="https://github.com/nethmidilekshakavi" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://www.linkedin.com/in/nethmi-dileksha-85b268319/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://www.youtube.com/@nethmidileksha413">Youtube</a>
              </div>
          </footer>


      </>


  )


}

export default Home
