import { PortfolioEntry, type PortfolioEntryProps } from "./PortfolioEntry";
import cscIcon from '../../assets/csc-w-background.jpg';
import webIcon from '../../assets/web-icon.png';
import gitHubIcon from '../../assets/github-icon-dark.png';
import youtubeIcon from '../../assets/yt-logo.png';
import discordIcon from '../../assets/discord-icon.png';
import flutterIcon from '../../assets/flutter-icon.png';
import pyTorchIcon from '../../assets/pytorch-icon.png';



const linksIconSize: number = 75;
const linksBorderRadius: number = 17.5;


const defaultLinkIconProps = {
    size: linksIconSize,
    borderRadius: linksBorderRadius
};


// Auto IMPORT ALL CSC IMAGES (sorted)
const cscImages: string[] = Object.entries(
    import.meta.glob('../../assets/portfolio/CSC/*.{png,PNG,JPG,jpg,jpeg}', {
        eager: true,
        import: 'default'
    })
)
.sort(([a], [b]) => a.localeCompare(b))   // alphabetical order
.map(([, value]) => value as string);




const hpbImages: string[] = Object.entries(
    import.meta.glob('../../assets/portfolio/HPB/*.{png,jpg,jpeg}', {
        eager: true,
        import: 'default'
    })
)
.sort(([a], [b]) => a.localeCompare(b))
.map(([, value]) => value as string);



// create seperate type  for data (no onImageClick)
// type PortfolioData = Omit<PortfolioEntryProps, 'onImageClick'>;

const portfolioData: PortfolioEntryProps[] = [
    {
        id: 1,

        title: 'Canadian Soccer Club',
        images: cscImages,
        previewTitle: 'Mobile App, Website, Backend, Database, Cloud Services',
        description: 'Redesigned and developed mobile app and website with 2,700+ registered players, including 300+ active users in the past year, improving usability and engagement.\n\nMigrated legacy website and backend API entirely to the new frontend and backend platform both built from scratch.\nSupports game scheduling, signups, player and team statistics, game history, JWT authentication, team and user pictures in cloud image storage.\nImplemented CI/CD pipelines with GitHub Actions to automate testing on every commit.\n\nImplemented transactional emails via Amazon SES, and SMS reminders via Amazon SNS.\n\nDeveloped Flutter frontend with modern UI/UX, and Firebase integrated for real-time push notifications and analytics.\n\nMaintain and enhance the platform with new user/admin features, bug fixes, and performance improvements.',
        links: [
            {
                logo: cscIcon,
                link: 'https://apps.apple.com/us/app/canadian-soccer-club/id1564032686',
                title: 'iOS',
                alt: 'iOS',
                ...defaultLinkIconProps
            },
            {
                logo: webIcon,
                link: 'https://www.canadiansoccerclub.com',
                title: 'Website',
                alt: 'Website',
                ...defaultLinkIconProps
            },
            {
                logo: gitHubIcon,
                link: 'https://github.com/anthony9105/Canadian-Soccer-Club-Documentation',
                title: 'Documentation',
                alt: 'GitHub Documentation',
                ...defaultLinkIconProps
            }
        ],
    },

    {
        id: 2,

        title: 'Hockey Player Builder',
        images: hpbImages,
        previewTitle: 'Personal Project',
        description: 'Created a tool that enables users to create custom hockey players and accurately compare their attributes to NHL players by analyzing strengths and weaknesses. Built without frameworks to demonstrate core web fundamentals and DOM manipulation.',
        links: [
            {
                logo: youtubeIcon,
                link: 'https://www.youtube.com/watch?v=RTB7aZkrak8',
                title: 'Demo',
                alt: 'Demo',
                ...defaultLinkIconProps
            },
            {
                logo: gitHubIcon,
                link: 'https://github.com/anthony9105/hockey-player-builder-tool',
                title: 'Documentation',
                alt: 'GitHub Documentation',
                ...defaultLinkIconProps
            }
        ],
    },

    {
        id: 3,

        title: 'Other Projects',
        images: [],
        previewTitle: '',
        description : '',
        links: [
            {
                logo: flutterIcon,
                link: 'https://github.com/CSCI4100U/course-project-csci4100-jaa-project',
                title: 'Mobile Devices\nFinal',
                alt: 'Mobile Devices Final',
                ...defaultLinkIconProps
            },
            {
                logo: pyTorchIcon,
                link: 'https://github.com/anthony9105/MachineLearningFinalProject',
                title: 'Machine Learning\nFinal',
                alt: 'Machine Learning Final',
                ...defaultLinkIconProps
            },
            {
                logo: discordIcon,
                link: 'https://github.com/anthony9105/DiscordBot-Public',
                title: 'Discord Music\nBot',
                alt: 'Discord Music Bot',
                ...defaultLinkIconProps
            },
        ],
    },
];


export default function PortfolioSection() {
    return (
        <div className='portfolio-background' id='portfolio'>
            <div className='portfolio-title-text'>Portfolio</div>
            <div className='title-hint-text'>Click on an image to see more</div>

            <div className='portfolio-wrapper'>
                {portfolioData.map((pItem) => (
                    <PortfolioEntry
                        key={pItem.id} 
                        {...pItem}               
                    />
                ))}
            </div>
        </div>
    );
}