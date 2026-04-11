
export type PreviewImageProps = {
    previewImg: string;
    onClick: () => void; 
};


export function PreviewImage({previewImg, onClick} : PreviewImageProps) {
    return (
        <div className='preview-img-container' onClick={() => onClick()}>
            <img className='preview-img' src={previewImg}></img>
        </div>
    );
}