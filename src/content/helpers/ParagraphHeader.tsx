export default function ParagraphHeader({ text }: { text: string }) {
    return (
        <div className='w-full justify-between px-1.5 lg:pe-5 lg:ps-4'>
            <div className="flex max-w-7xl mx-auto py-4 justify-start space-x-4">
                <h5 className="font-sans font-normal text-gray-800 text-2xl subpixel-antialiased">{text}</h5>
            </div>
        </div>
    )
}