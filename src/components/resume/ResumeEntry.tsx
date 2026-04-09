import { LogoIcon } from "../LogoIcon";

export type ResumeEntryProps = {
    id: number,

    logo: string;
    link: string;
    alt: string;
    dateTimeline: string;
    primaryTitle: string;
    secondaryTitle: string;
    location: string;
    rolePrimary: string;
    roleSecondary: string;
};

export default function ResumeEntry({
    logo,
    link,
    alt,
    dateTimeline,
    primaryTitle,
    secondaryTitle,
    location,
    rolePrimary,
    roleSecondary
}: ResumeEntryProps) {
    return (
        <div className='education-entry'>
            <LogoIcon logo={logo} link={link} alt={alt}></LogoIcon>

            <div className='education-right-group'>
                <div className='education-school-year-column'>
                    <div className='education-entry-year'>
                        {dateTimeline}
                    </div>

                    <div className='education-entry-school'>
                        {primaryTitle}
                    </div>

                    <div className='education-entry-school-sec'>
                        {secondaryTitle}
                    </div>

                    <div className='education-entry-school-location'>
                        {location}
                    </div>
                </div>

                <div className='education-name-column'>
                    <div className='education-degree-name'>
                        {rolePrimary}
                    </div>

                    <div className='education-achievement-name'>
                        {roleSecondary}
                    </div>
                </div>
            </div>
        </div>
    );
}