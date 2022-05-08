import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import AccountMainCard from '../account-main-card/account-main-card'
import './offer-card.css'

const OfferCard = ({offer}) => {

  const { auth } = useAuth();

  return (
    <div className="account">
        <div className="account-header">
            <img src="Image 5.png"/>
            <span>{auth.user}</span>
        </div>

        <div className="account-main">
            
            <div className="account-main_header">
                <NavLink to={'/teklifAl'}>Teklif Aldıklarım</NavLink>
                <NavLink to={'/teklifVerdiklerim'}>Teklif Verdiklerim</NavLink>
            </div>

            <AccountMainCard offer={offer}/>
           
        </div>
    </div>
  )
}

export default OfferCard;