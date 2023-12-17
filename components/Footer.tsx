import { FaBeer } from 'react-icons/fa';
import { SiAmazonpay, SiAbbott, Si4Chan } from "react-icons/si";
const Footer = () => {
    return (
        <footer className="footer">
            <p>NEWSDUMMY</p>
            <div className={"icons-container"}>
                <FaBeer style={{fontSize: '2rem'}}/>
                <SiAmazonpay style={{fontSize: '2rem'}}/>
                <SiAbbott style={{fontSize: '2rem'}}/>
                <Si4Chan style={{fontSize: '2rem'}}/>
            </div>
            <h3>@2023 MaksSolder. All Right Reserved.</h3>
        </footer>
    );
};

export default Footer;