import { PortfolioEntry, type PortfolioEntryProps } from "./PortfolioEntry";
import cscIcon from '../../assets/portfolio/CSC/csc-w-background.jpg';
import previewImg1 from '../../assets/portfolio/CSC/1_home_screen_2.png';
import webIcon from '../../assets/web-icon.png';
import gitHubIcon from '../../assets/github-icon-dark.png';


const linksIconSize: number = 75;
const linksBorderRadius: number = 15;


const defaultLinkIconProps = {
    size: linksIconSize,
    borderRadius: linksBorderRadius
};


const portfolioData: PortfolioEntryProps[] = [
    {
        id: 1,

        title: 'Canadian Soccer Club',
        previewImage: previewImg1,
        previewTitle: 'Mobile App, Website, Backend, Database, Cloud Services',
        description: 'Redesigned and developed mobile app and website with 2,700+ registered players, including 300+ active users in the past year, improving usability and engagement.',
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
];


export default function PortfolioSection() {
    return (
        <div className='portfolio-background'>
            <div className='portfolio-title-text'>Portfolio</div>
            <div className='title-hint-text'>Click on an image to see more</div>
            {portfolioData.map((pItem) => (
                <PortfolioEntry
                    key={pItem.id} 
                    {...pItem}                  
                />
            ))}
        </div>
    );
}