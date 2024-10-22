export default function RightMenu() {
    return (
        <div className="text-base justify-center items-center gap-1.5 flex 3xl:flex-1 flex-row 3xl:justify-end">
            <div className="mx-2.5 gap-1.5 hidden lg:flex">
                <div className="flex flex-auto sm:flex-1">
                    <a className="active:scale-95 transition-transform w-full text-center outline-link py-1.5 px-1.5 xs:px-3 sm:px-4 rounded-full capitalize whitespace-nowrap hover:bg-primary/5 hover:dark:bg-primary-dark/5" href="/entries">
                        Entries
                    </a>
                </div>
                <div className="flex flex-auto sm:flex-1">
                    <a className="active:scale-95 transition-transform w-full text-center outline-link py-1.5 px-1.5 xs:px-3 sm:px-4 rounded-full capitalize whitespace-nowrap bg-highlight dark:bg-highlight-dark text-link dark:text-link-dark" href="/contact">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )
}