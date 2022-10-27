import React from 'react';
import styles from './Card.module.scss';


function Card({onFavoritClick,price,title,imageUrl,onPlusClick}){
    const [isAdded, setIsAdded] = React.useState(false);
    const handleClick = () => {
        onPlusClick({ price, title, imageUrl});
        setIsAdded(!isAdded);
    }
    const [favorit, setLike]= React.useState(false);
    const onFavorite = () =>{
        setLike(!favorit)
    }
return(
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src={ favorit ? "/img/liked.svg" : "/img/unliked.svg"} alt="" onClick={onFavoritClick}/>
            </div>
            <img width={133} height={112} src={imageUrl} alt=""/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                    <img className={styles.plus} onClick={handleClick} src={ isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
            </div>
        </div>
    );
}

export default Card;


