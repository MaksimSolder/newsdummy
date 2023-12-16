import Link from "next/link";
import "./header.scss";
const Header = () => {
    return (
    <div className="header">
            <h1 className="logo">NEWSDUMMY</h1>
            <div className="header__board">
                <Link href={'/'} className="header__board-link">Home</Link>
                <Link href={'/'} className="header__board-link">Recipes</Link>
                <Link href={'/'} className="header__board-link">Article</Link>
                <Link href={'/'} className="header__board-link">Contact</Link>
                <Link href={'/'} className="header__board-link">Purchase</Link>
            </div>
    </div>
    );
};

export default Header;