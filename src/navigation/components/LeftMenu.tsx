export default function LeftMenu() {
    return (
        <div className="flex flex-row 3xl:flex-1 items-centers">
            <button type="button" aria-label="Menu" className="active:scale-95 transition-transform flex lg:hidden w-12 h-12 rounded-full items-center justify-center hover:bg-primary/5 outline-link">
                <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
            <span className="flex items-center">Best blog possible</span>
        </div>
    )
}