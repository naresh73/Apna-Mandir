import './mandirlogo.css';
import Temple from '../../Assests/images/temple.jpg';

export default function MandirLogoSection() {
    return (
        <div className="templeImage">
            <img src={Temple} width="920px" alt="" />
            <h2 className="logo">Logo here</h2>
            <h2 className="owner">Admin: Ranakpur Jain Temple</h2>
        </div>
    )
}
