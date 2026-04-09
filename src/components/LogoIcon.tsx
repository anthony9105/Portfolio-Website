
export type LogoIconProps = {
    link: string;
    alt: string;
    logo: string;
    size?: number;
};

export function LogoIcon({link, alt, logo, size} : LogoIconProps) {
    return (
        <a href={link} target='_blank' className='img-container' rel="noopener noreferrer">
            <img
                className='education-entry-logo'
                src={logo}
                alt={alt}
                width={size ?? undefined}
                height={size ?? undefined}
            />
        </a>
    );
}