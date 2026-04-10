import './Portfolio.css';
import { LogoIcon } from '../LogoIcon';

export type PortfolioEntryProps = {
    id: number,

    title: string;
    previewImage: string;
    previewTitle: string;
    description: string;
    links: {
        logo: string;
        link: string;
        title: string;
        borderRadius?: number;
        size?: number;
        alt: string
    }[];
};


export function PortfolioEntry({title, previewImage, previewTitle, description, links} : PortfolioEntryProps) {
    return (
        <div className='entry-outer-wrapper'>
            <div className='entry-title'>{title}</div>
            <div className='preview-img-container'>
                <img className='preview-img' src={previewImage}></img>
            </div>
            <div className='preview-text-container'>
                <div className='preview-text-title'>{previewTitle}</div>
                <div className='description'>{description}</div>
                <div className='available-here-text'>Available Here</div>
                <div className='links-row'>
                    {links.map((linkItem, index) => (
                        <LogoIcon
                            key={index}
                            {...linkItem}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}