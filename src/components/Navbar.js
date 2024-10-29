export default function Navbar() {
    return (
        <div className="Navbar d-flex justify-content-center">
            <a href="/about" className="nav-link text-primary me-2">More About</a>
            <a href="/support" className="nav-link text-primary me-2">Support Us</a>
            <a href="/" className="nav-link text-primary me-2">Main Page</a>
        </div>
    );
}