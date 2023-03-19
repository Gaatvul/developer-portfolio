import profilePic from '../assets/images/picture.png'

const Hero = () => {
    return (
        <section>
            <div className="hero">
                <img
                    src={`${profilePic}`}
                    className="profile-picture"
                    alt="profile picture"
                />
                <div className="about-text">
                    <p className="hi">Hi, my name is</p>
                    <p className="name">Logan Duff</p>
                    <p className="about">
                        As a self-taught full stack developer, I am passtionate providing
                        innovative solutions to problems. I would like to share my skills
                        and take your business to the next level.
                    </p>
                </div>
                <a className="scroll-down" href="#tools">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 40 8 24l2.1-2.1 12.4 12.4V8h3v26.3l12.4-12.4L40 24Z" /></svg>
                </a>
            </div>

        </section>
    )
}
export default Hero