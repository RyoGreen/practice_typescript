export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full p-4 bg-gray-800 text-white flex justify-between items-center shadow-md z-50">
            <h1 className="text-xl font-bold">My App</h1>
            <nav className="space-x-4">
                <a href="/" className="hover:underline">Home</a>
                <a href="/detail" className="hover:underline">Detail</a>
            </nav>
        </header>
    );
}

