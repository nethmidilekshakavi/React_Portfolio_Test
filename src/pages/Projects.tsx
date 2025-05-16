import './projects.css'
import './footer.css'

const Projects = () => {

    return (
        <>
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

            <br/>

            <footer className="footer">
                <p>© 2025 Nethmi Dileksha. All rights reserved.</p>
                <div className="social-icons">
                    <a href="https://github.com/nethmidilekshakavi" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/nethmi-dileksha-85b268319/" target="_blank"
                       rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.youtube.com/@nethmidileksha413">Youtube</a>
                </div>
            </footer>


        </>
    )

}

export default Projects
