import './contact.css'
import './footer.css'

const Conatact = () =>{

    return(

        <>
            <div className="contact-container">
                <h1>Contact Me</h1>

                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required/>
                    <input type="email" placeholder="Your Email" required/>
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
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
export default Conatact;