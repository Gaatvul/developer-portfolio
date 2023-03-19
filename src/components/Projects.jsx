import ImageSlider from "./ImageSlider";
import bugJarHome from '../assets/images/home_page.png'
import bugJarDash from '../assets/images/dashboard.png'
import bugJarAllReps from '../assets/images/all_bug_reports.png'
import bugJarRepPage from '../assets/images/bug_report_view.png'
import splashMain from '../assets/images/main_screen.png'


const Projects = () => {

    const bugJarImages = [
        {
            source: `${bugJarHome}`,
            title: "Bug Jar home page"
        },
        {
            source: `${bugJarDash}`,
            title: "Bug Jar dashboard"
        },
        {
            source: `${bugJarAllReps}`,
            title: "Bug Jar all reports page"
        },
        {
            source: `${bugJarRepPage}`,
            title: "Bug Jar bug report page"
        }
    ]

    const weatherImages = [
        {
            source: `${splashMain}`,
            title: "A Splash of Weather main page"
        }
    ]

    return (
        <section>
            <p className="section-title">Projects</p>
            <div className="projects">
                <div className="project">
                    <div className="ribbon-wrapper">
                        <div className="ribbon featured">Featured</div>
                    </div>
                    <div className="project-description">
                        <p className="project-title">Bug Jar</p>
                        <p>A software defect management and lifecycle tracking tool.</p>
                        Features:
                        <ul>
                            <li>Accounts & account management</li>
                            <li>User roles (end-user, developer, administrator etc.)</li>
                            <li>Feature access control through user roles.</li>
                        </ul>
                        <div className="links">
                            <a
                                href="https://bug-jar-production.up.railway.app/"
                                target="_blank"
                            >
                                See live demo!
                            </a>
                            <a href="https://github.com/Gaatvul/Bug-Jar" target="_blank"
                            >See my source code!</a
                            >
                        </div>
                    </div>
                    <div className="slideshow">
                        <div className="project-images">
                            <ImageSlider slides={bugJarImages} />
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="ribbon-wrapper">
                        <div className="ribbon fresh">Fresh</div>
                    </div>
                    <div className="project-description">
                        <p className="project-title">A Splash of Weather</p>
                        <p>A weather app with dynamic backgrounds.</p>
                        Features:
                        <ul>
                            <li>Location auto complete</li>
                            <li>5 day forecast</li>
                            <li>Background image to match current weather</li>
                        </ul>
                        <div className="links">
                            <a
                                href="https://gaatvul.github.io/a-splash-of-weather/"
                                target="_blank"
                            >
                                See live demo!
                            </a>
                            <a
                                href="https://github.com/Gaatvul/a-splash-of-weather"
                                target="_blank"
                            >See my source code!</a
                            >
                        </div>
                    </div>
                    <div className="slideshow">
                        <div className="project-images">
                            <ImageSlider slides={weatherImages} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects