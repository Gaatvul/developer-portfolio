const ContactMe = () => {
    return (
        <section>
            <p className="section-title">Contact Me</p>
            <div className="contact-form-wrapper">
                <form className="contact-form" action="https://formsubmit.co/cf695ae41a0d5a3613068d4c4b26d559" method="POST">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" required />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" style={{ height: "250px" }} required />
                    <button className="submit-button" type="submit">Send</button>
                </form>
            </div>
        </section>
    )
}
export default ContactMe