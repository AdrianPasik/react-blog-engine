export default function ParagraphHeader({ text }: { text: string }) {
    return (
        <div className='w-full justify-between px-1.5 lg:pe-5 lg:ps-4'>
            <div className="lines flex max-w-3xl mx-auto py-4 justify-center space-x-4">
                <h5 className="font-sans font-normal text-gray-600 text-2xl antialiased opacity-0" style={{opacity: 1, transform: "none", willChange: "auto"}}>{text}</h5>

            </div>
        </div>
    )
}