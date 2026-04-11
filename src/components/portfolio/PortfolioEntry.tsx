import './Portfolio.css';
import { LogoIcon } from '../LogoIcon';
import { PreviewImage } from './PreviewImage';
import { useState } from "react";
import arrowRight from '../../assets/icons/arrow-right-solid-full-3.svg';
import arrowLeft from '../../assets/icons/arrow-left-solid-full-3.svg';

export type PortfolioEntryProps = {
    id: number,

    title: string;
    
    images: string[];

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


export function PortfolioEntry({ title, images, previewTitle, description, links }: PortfolioEntryProps) {

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <div className='entry-outer-wrapper'>
            <div className='entry-title'>{title}</div>

            {/* Preview = first image */}
            <PreviewImage 
                previewImg={images[0]} 
                onClick={() => setSelectedIndex(0)}
            />

            <div className='preview-text-container'>
                <div className='preview-text-title'>{previewTitle}</div>
                <div className='description'>{description}</div>
                <div className='available-here-text'>Available Here</div>

                <div className='links-row'>
                    {links.map((linkItem, index) => (
                        <LogoIcon key={index} {...linkItem} />
                    ))}
                </div>
            </div>

            {/* ✅ Lightbox for THIS project only */}
            {selectedIndex !== null && (
                <div className="lightbox" onClick={() => setSelectedIndex(null)}>

                    <button className='arrow-background'
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedIndex((prev) =>
                                (prev! - 1 + images.length) % images.length
                            );
                        }}
                    ><img src={arrowLeft} alt="Previous"/></button>

                    <img
                        src={images[selectedIndex]}
                        className="lightbox-img"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button className='arrow-background'
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedIndex((prev) =>
                                (prev! + 1) % images.length
                            );
                        }}
                    ><img src={arrowRight} alt="Next"/></button>
                </div>
            )}
        </div>
    );
}


// export function PortfolioEntry({title, previewImage, previewTitle, description, links, index, onImageClick} : PortfolioEntryProps) {
//     return (
//         <div className='entry-outer-wrapper'>
//             <div className='entry-title'>{title}</div>

//             <PreviewImage 
//                 previewImg={previewImage}
//                 index={index}
//                 onClick={onImageClick}
//             />

//             <div className='preview-text-container'>
//                 <div className='preview-text-title'>{previewTitle}</div>
//                 <div className='description'>{description}</div>
//                 <div className='available-here-text'>Available Here</div>
//                 <div className='links-row'>
//                     {links.map((linkItem, index) => (
//                         <LogoIcon
//                             key={index}
//                             {...linkItem}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }