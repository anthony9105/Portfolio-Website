import { LogoIcon } from "../LogoIcon";
import { useState, useEffect } from "react";

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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkSize = () => {
            setIsMobile(window.innerWidth <= 720);
        };

        checkSize();

        window.addEventListener("resize", checkSize);
        return () => window.removeEventListener("resize", checkSize);
    }, []);

    return (
        <div className='education-entry'>
            <LogoIcon logo={logo} link={link} alt={alt} size={isMobile ? 75 : undefined}></LogoIcon>

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