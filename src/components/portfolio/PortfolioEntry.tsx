import './Portfolio.css';
import { LogoIcon } from '../LogoIcon';
import { PreviewImage } from './PreviewImage';
import { useState, useEffect } from "react";
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
        alt: string;
    }[];
};


export function PortfolioEntry({
    title,
    images,
    previewTitle,
    description,
    links
}: PortfolioEntryProps) {

    // STATE
    const [isMobile, setIsMobile] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [zoom, setZoom] = useState(1);
    const [offset, setOffset] = useState({ x: 0, y: 0 }); // offset from center (for zoom-to-point)


    // EFFECTS
    useEffect(() => {
        const checkSize = () => {
            setIsMobile(window.innerWidth <= 720);
        };

        checkSize();

        document.body.style.overflow = selectedIndex !== null ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedIndex]);


    // RESET HELPERS
    const resetZoom = () => {
        setZoom(1);
        setOffset({ x: 0, y: 0 });
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        resetZoom();
    };

    const nextImage = () => {
        setSelectedIndex((prev) => {
            resetZoom();
            return (prev! + 1) % images.length;
        });
    };

    const prevImage = () => {
        setSelectedIndex((prev) => {
            resetZoom();
            return (prev! - 1 + images.length) % images.length;
        });
    };


    // ZOOM LOGIC
    /**
     * Toggling the zoom on a specific point on the image with left click
     * @param e React Mouse Event
     */
    const toggleZoomAtPoint = (e: React.MouseEvent<HTMLImageElement>) => {
        const rect = e.currentTarget.getBoundingClientRect(); // position and size of image on screen

        // mouse position inside the image
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // if at default/normal zoom, zoom to 2
        if (zoom === 1) {
            const nextZoom = 2;

            const dx = x - rect.width / 2;  // distance from centre (x-axis)
            const dy = y - rect.height / 2; // same but y-axis

            setZoom(nextZoom);
            setOffset({ x: -dx, y: -dy });
        } 
        // zoom back out to default/normal (reset)
        else {
            resetZoom();
        }
    };

    /**
     * Handling zooming in or out with the mouse wheel
     * @param e React Mouse Event
     * @returns void
     */
    const handleWheelZoom = (e: React.WheelEvent<HTMLImageElement>) => {
        e.stopPropagation();    // stop event from affecting the page or parent containers
        e.preventDefault();     // prevent browser from scrolling the page when using the wheel

        const rect: DOMRect = e.currentTarget.getBoundingClientRect();  // position and size of the image on screen

        // get mouse position inside the image
        const x: number = e.clientX - rect.left;
        const y: number = e.clientY - rect.top;

        // Scroll up (deltaY < 0) => zoom in
        // Scroll down            => zoom out
        const nextZoom: number = Math.min(
            Math.max(1, zoom + (e.deltaY < 0 ? 0.2 : -0.2)),
            4
        );

        // if zoom is going to go back to normal (1)
        if (nextZoom === 1) {
            resetZoom();
            return;
        }

        const scale: number = nextZoom / zoom;  // how much the zoom is changing compared to the current zoom

        const dx: number = x - rect.width / 2;  // distance from the centre of the image to mouse position (x-axis)
        const dy: number = y - rect.height / 2; // same but for the y-axis

        // update offset so the zoom focuses toward the mouse position
        setOffset({
            x: offset.x - dx * (scale - 1),
            y: offset.y - dy * (scale - 1)
        });

        setZoom(nextZoom);
    };


    // RENDER
    return (
        <div className='entry-outer-wrapper'>
            <div className='entry-title'>{title}</div>

            {/* PREVIEW */}
            <PreviewImage 
                previewImg={images[0]} 
                onClick={() => {
                    setSelectedIndex(0);
                    resetZoom();
                }}
            />

            <div className='preview-text-container'>
                <div className='preview-text-title'>{previewTitle}</div>
                <div className='description'>{description}</div>
                <div className='available-here-text'>Available Here</div>

                <div className='links-row'>
                    {links.map((linkItem, index) => (
                        <LogoIcon key={index} {...linkItem} size={isMobile ? 70 : linkItem.size} borderRadius={isMobile ? 25 : linkItem.borderRadius} />
                    ))}
                </div>
            </div>

            {/* LIGHTBOX */}
            {selectedIndex !== null && (
                <div className="lightbox" onClick={closeLightbox}>

                    {/* LEFT ARROW */}
                    <button className='arrow-background arrow-left' onClick={(e) => {  e.stopPropagation();  prevImage();  }}>
                        <img src={arrowLeft} alt="Previous"/>
                    </button>

                    {/* SELECTED IMAGE */}
                    <img
                        src={images[selectedIndex]}
                        className={`lightbox-img ${zoom > 1 ? "zoomed" : "not-zoomed"}`}

                        style={{
                            transform: `
                                translate(-50%, -50%)
                                translate(${offset.x}px, ${offset.y}px)
                                scale(${zoom})
                            `
                        }}

                        // left click zoom to point
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleZoomAtPoint(e);
                        }}

                        // scroll wheel zoom
                        onWheel={handleWheelZoom}
                    />

                    {/* RIGHT ARROW */}
                    <button className='arrow-background arrow-right' onClick={(e) => {  e.stopPropagation();  nextImage();  }}>
                        <img src={arrowRight} alt="Next"/>
                    </button>

                </div>
            )}
        </div>
    );
}