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
            <a href={link} target='_blank' className='img-container' rel="noopener noreferrer">
                <img
                    className='education-entry-logo'
                    src={logo}
                    alt={alt}
                />
            </a>

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