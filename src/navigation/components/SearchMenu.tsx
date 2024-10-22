export default function SearchMenu() {
    return (
        <div className="items-center justify-center flex-1 hidden w-full md:flex 3xl:w-auto 3xl:shrink-0 3xl:justify-center">
            <button type="button" className="flex 3xl:w-[56rem] 3xl:mx-0 relative ps-4 pe-1 py-1 h-10 bg-gray-400 outline-none focus:outline-link betterhover:hover:bg-opacity-80 pointer items-center text-start w-full text-gray-30 rounded-full align-middle text-base">
                <svg width="1em" height="1em" viewBox="0 0 20 20" className="align-middle me-3 text-gray-30 shrink-0 group-betterhover:hover:text-gray-70">
                    <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" stroke-width="2" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                    </path>
                </svg>Search
            </button>
        </div>
    )
}