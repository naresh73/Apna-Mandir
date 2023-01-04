import Dropdown from '../Buttons/Dropdown';
import Header from '../Header';
import SubHeader from '../Sub-Header';
import './home.css';

export default function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <SubHeader />
      <Dropdown />
    </div>
  )
}
