import React from 'react';
import Card from './components/Card'
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr = [
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede',price: 12999, imageUrl:"/img/sneakers/1.jpg"},
  {title: 'Мужские Кроссовки Nike Air Max 270',price: 15600, imageUrl:"/img/sneakers/2.jpg"},
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede',price: 8499, imageUrl:"/img/sneakers/3.jpg"},
  {title: 'Кроссовки Puma X Aka Boku Future Rider',price: 8999, imageUrl:"/img/sneakers/4.jpg"}
];

function App() {

  const [cartOpened, setCartOppened] = React.useState(false);

  return (
   <div className="wrapper clear">
      { cartOpened && <Drawer   onClose={() => setCartOppened(false)} />}
      <Header onClickCart={() => setCartOppened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt=""/> 
            <input placeholder="Поиск" />
          </div>
        </div>
          <div className="d-flex">
            {arr.map((obj) => (
              <Card 
              title={obj.title} 
              price={obj.price} 
              imageUrl={obj.imageUrl}
              onFavoritClick={() => console.log('Добавили в закладки ')}
              onPlusClick={() => console.log('Добавили в корзину')}
              /> 
            ))}
          </div>
      </div>
   </div>
  );
}

export default App;
