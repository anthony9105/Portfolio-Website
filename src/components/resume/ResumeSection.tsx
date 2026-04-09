type ResumeSectionProps = {
    title: string;
    children: React.ReactNode;
};

export default function ResumeSection({
    title,
    children
}: ResumeSectionProps) {
    return (
        <div className='education-entry-wrapper'>
            <div className="education-title-text">
                {title}
            </div>

            <div className='education-entry-wrap'>
                {children}
            </div>
        </div>
    );
}