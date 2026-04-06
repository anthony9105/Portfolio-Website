import './Resume.css';
import otuLogo from '../assets/Otu-logo6.png';
import cscLogo from '../assets/CSC-logo.png';

export default function Resume() {
    return (
        <div className='background'>

            {/* Wrapper to use the width of the largest of all the entries */}
            <div className='max-width-wrapper'>
                {/* Education/degree */}
                <div className="education-title-text">Education</div>

                {/* Education entry */}
                <div className='education-entry'>

                    <a href='https://ontariotechu.ca/' target='_blank' className='img-container'>
                        <img className='education-entry-logo' src={otuLogo} alt='Ontario Tech University'></img>
                    </a>

                    <div className='education-right-group'>
                        <div className='education-school-year-column'>
                            <div className='education-entry-year'>2025</div>
                            <div className='education-entry-school'>Ontario Tech University</div>
                            <div className='education-entry-school-sec'>Formerly: University of Ontario Institute of Technology (UOIT)</div>
                            <div className='education-entry-school-location'>Oshawa, Ontario, Canada</div>
                        </div>

                        <div className='education-name-column'>
                            <div className='education-degree-name'>Bachelor of Science</div>
                            <div className='education-achievement-name'>Computer Science</div>
                        </div>
                    </div>

                </div>


                {/* Work experience */}
                <div className="education-title-text">Work Experience</div>

                {/* Work experience entry */}
                <div className='education-entry'>

                    <a href='https://www.canadiansoccerclub.com' target='_blank' className='img-container'>
                        <img className='education-entry-logo' src={cscLogo} alt='Canadian Soccer Club'></img>
                    </a>

                    <div className='education-right-group'>
                        <div className='education-school-year-column'>
                            <div className='education-entry-year'>2025 - present</div>
                            <div className='education-entry-school'>Canadian Soccer Club</div>
                            <div className='education-entry-school-sec'></div>
                            <div className='education-entry-school-location'>Markham, Ontario, Canada</div>
                        </div>

                        <div className='education-name-column'>
                            <div className='education-degree-name'>Full-Stack Developer</div>
                            <div className='education-achievement-name'>Remote</div>
                        </div>
                    </div>

                </div>


            </div>
            
        </div>
    );
}