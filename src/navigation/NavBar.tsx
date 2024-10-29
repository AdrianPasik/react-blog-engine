import Menu from "./components/Menu"

export default function NavBar() {
    return (
        <>
            <nav className="w-full justify-between px-1.5 lg:pe-5 lg:ps-4">
                <Menu />
            </nav>
        </>
    )
}
