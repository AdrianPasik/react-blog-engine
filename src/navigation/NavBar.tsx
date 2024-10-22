import SearchMenu from "./components/SearchMenu"
import LeftMenu from "./components/LeftMenu"
import RightMenu from "./components/RightMenu"

export default function NavBar() {
    return (
        <>
            <nav className="items-center w-full flex justify-between px-1.5 lg:pe-5 lg:ps-4 z-40">
                <div className="flex items-center justify-between w-full h-16 gap-0 sm:gap-3">
                    <LeftMenu />
                    <SearchMenu />
                    <RightMenu />
                </div>

            </nav>
        </>
    )
}
