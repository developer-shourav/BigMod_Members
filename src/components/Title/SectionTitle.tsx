
type SectionTitleProps = {
    firstLineText: string
    lastLineText: string
}
const SectionTitle = ({ firstLineText, lastLineText }: SectionTitleProps) => {
    return (
        <div className="my-5 ">
            <h2 className="text-[48px] text-black font-bold">
                {firstLineText}
                <span className="-mt-4 block">{lastLineText}</span>
            </h2>
        </div>
    );
};

export default SectionTitle;