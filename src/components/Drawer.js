function Drawer({onClose,items = []}){
    return(
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between m-30">Корзина 
                    <img onClick={onClose} className="removeBtn  cu-p" src="/img/btn-remove.svg" alt=""/>
                </h2>
                <div className="items" style={{flex:1}}>
                    {
                        items.map((obj) => (
                            <div className="cartItem d-flex align center mb-20">
                                <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
                                <div className="mr-20 flex">
                                    <p className="mb-5">{obj.title}</p>
                                    <b>{obj.price} руб.</b>
                                </div>
                                <img className="removeBtn" src="/img/btn-remove.svg" alt=""/>
                            </div>
                        ))
                    }
                </div>
                <div className="cartTotalBlock">
                <ul >
                    <li className="d-flex"> 
                        <span>Итого:</span>
                        <div></div>
                        <b>21 498 руб.</b>
                    </li>
                    <li className="d-flex">
                        <span>Налог 5%</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt=""/> </button>
                </div>
            </div>
      </div>
    )
}

export default Drawer;