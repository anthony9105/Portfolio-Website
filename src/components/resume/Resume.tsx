import './Resume.css';
import otuLogo from '../../assets/Otu-logo6.png';
import cscLogo from '../../assets/CSC-logo.png';
import ResumeEntry, { type ResumeEntryProps } from './ResumeEntry';
import ResumeSection from './ResumeSection';


const educationData: ResumeEntryProps[] = [
    {
        id: 1,

        logo: otuLogo,
        link: 'https://ontariotechu.net',
        alt: 'Ontario Tech University',
        dateTimeline: '2025',
        primaryTitle: 'Ontario Tech University',
        secondaryTitle: 'Formerly: UOIT',
        location: 'Oshawa, Ontario, Canada',
        rolePrimary: 'Bachelor of Science',
        roleSecondary: 'Computer Science'
    },
];

const workData: ResumeEntryProps[] = [
    {
        id: 2,

        logo: cscLogo,
        link: 'https://www.canadiansoccerclub.com',
        alt: 'Canadian Soccer Club',
        dateTimeline: '2025 - present',
        primaryTitle: 'Canadian Soccer Club',
        secondaryTitle: '',
        location: 'Markham, Ontario, Canada',
        rolePrimary: 'Full-Stack Developer',
        roleSecondary: 'Remote'
    },
];


export default function Resume() {
    return (
        <div className='background' id='qualifications'>
            {/* Manual way */}
            {/* <ResumeSection title='Education'>
                <ResumeEntry 
                    logo={otuLogo}
                    link='https://ontariotechu.net'
                    alt='Ontario Tech University'
                    dateTimeline='2025'
                    primaryTitle='Ontario Tech University'
                    secondaryTitle='Formerly: University of Ontario Institute of Technology (UOIT)'
                    location='Oshawa, Ontario, Canada'
                    rolePrimary='Bachelor of Science'
                    roleSecondary='Computer Science'
                />
            </ResumeSection> */}

            <ResumeSection title='Education'>
                {educationData.map((entry) => (
                    <ResumeEntry
                        key={entry.id}
                        {...entry} // equivalent to typing out logo =.... link=... etc
                    />
                ))}
            </ResumeSection>

            <ResumeSection title='Work Experience'>
                {workData.map((entry) => (
                    <ResumeEntry 
                        key={entry.id}
                        {...entry} 
                    />
                ))}
            </ResumeSection>
        </div>
    );
}