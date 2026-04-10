import './LogoIcon.css';


export type LogoIconProps = {
    link: string;
    alt: string;
    logo: string;
    size?: number;
    borderRadius?: number;
    title?: string;
};

export function LogoIcon({link, alt, logo, size, borderRadius, title} : LogoIconProps) {
    return (
        <div className='logo-icon-wrapper'>
            <a href={link} target='_blank' className='img-container' rel="noopener noreferrer">
                <img
                    className='education-entry-logo'
                    src={logo}
                    alt={alt}
                    width={size ?? undefined}
                    height={size ?? undefined}
                    style={{
                        borderRadius: borderRadius ?? undefined,
                    }}
                    title={title ?? undefined}
                />
            </a>
            <div className='logo-icon-text'>{title}</div>
        </div>
    );
}