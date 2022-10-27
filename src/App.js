import React, { useState } from 'react';
import Card from './components/Card'
import Drawer from './components/Drawer';
import Header from './components/Header';


function App() {
  const [items, setItems]= React.useState([]);
  const [cartItems, setCart]= React.useState([]);
  const [seacrh,searchCart] = React.useState('');
  const [cartOpened, setCartOppened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://6353d285ccce2f8c02fd5f0c.mockapi.io/items').
    then(res => {
      return res.json();
    })
    .then((json) =>{
      setItems(json)
    });
  
  }, [])

  const onAddCart = (obj) => {
    setCart([... cartItems, obj]);
  };

  const onChangeSearch = (event) =>{
    searchCart(event.target.value);


  }

  return (
   <div className="wrapper clear">
      { cartOpened && <Drawer items={cartItems}  onClose={() => setCartOppened(false)} />}
      <Header onClickCart={() => setCartOppened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{seacrh ? `Поиск по запросу "${seacrh}"` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt=""/> 
          {seacrh && (
              <img 
                onClick={() => searchCart('')}
                className='clear cu-p'
                src='/img/btn-remove.svg'
                alt=''
              />
            )}

            <input onChange={onChangeSearch} value={seacrh} placeholder="Поиск" />
          </div>
        </div>
          <div className="d-flex flex-wrap">
            {items.map((item) => (
              <Card 
                key={item.imageUrl}
                title={item.title} 
                price={item.price} 
                imageUrl={item.imageUrl}
                onFavoritClick={() => console.log('Добавили в закладки ')}
                onPlusClick={(obj) => onAddCart(obj)}
              /> 
            ))}
          </div>
      </div>
   </div>
  );
}

export default App;
