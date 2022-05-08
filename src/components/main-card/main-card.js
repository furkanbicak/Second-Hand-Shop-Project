import { Link } from 'react-router-dom';
import './main-card.css'

const MainCard = ({ products }) => {

  return (

    <div className = 'main-card'>
        {
            products?.map((item) => {
                return (
                    <Link style={{ textDecoration: 'none' }} to={ `/productDetail?id=${item?.id}` }>
                        <div className="main-card_content">

                            <div className="main-card_content_img">
                                <img src={`https://bootcamp.akbolat.net/${item?.image?.url}`}/>
                            </div>

                            <div className="main-card_content_prodcut">
                                <p> { item?.brand } </p>
                                <p> Renk: { item?.color } </p>
                            </div>

                            <div className="main-card_content_price">
                                <span> { item?.price } TL </span>
                            </div>
                                
                        </div> 
                    </Link>
                )
            })    
        }
    </div>            

  )
}

export default MainCard;