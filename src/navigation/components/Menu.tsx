export default function Menu() {
    return (
        <>
            <div className="flex max-w-7xl mx-auto border rounded-lg px-8 py-4 justify-start space-x-4">
                <a className="relative text-neutral-900 items-center flex space-x-1 hover:text-neutral-600">
                    <span>Home</span>
                </a>
                <a className="relative text-neutral-900 items-center flex space-x-1 hover:text-neutral-600">
                    <span>Contact info</span>
                </a>
                <a className="relative text-neutral-900 items-center flex space-x-1 hover:text-neutral-600">
                    <span>This is where I write stuff</span>
                </a>
            </div>
        </>
    )
}