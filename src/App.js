import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from './components/ItemsBackup';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Кожанный стул',
          img: 'chair.jpg',
          desc: 'Премиальный кожаный игровой стул с эргономичным дизайном',
          category: 'chairs',
          price: '12.990'
        },
        {
          id: 2,
          title: 'Шкаф',
          img: 'closet.jpeg',
          desc: 'Современный, минималистический шкаф с раздвижными дверцами',
          category: 'chairs',
          price: '25.990'
        },
        {
          id: 3,
          title: 'Кровать',
          img: 'bed.jpg',
          desc: 'Комфортная кровать размера queen size с ортопедическим матрасом',
          category: 'chairs',
          price: '24.990'
        },
        {
          id: 4,
          title: 'Стол',
          img: 'table.jpg',
          desc: 'Прочный деревянный игровой стол с закаленным стеклом',
          category: 'chairs',
          price: '10.990'
        },
        {
          id: 5,
          title: 'Полка',
          img: 'shelf.jpg',
          desc: 'Прочная деревянная полка для украшений',
          category: 'chairs',
          price: '2.590'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
   
  }

  addToOrder(ItemRope){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === Items.id)
        isInArray = true
    })
    if (!isInArray)
    this.setState({orders:[...this.state.orders,ItemRope]})
  }
}

export default App;
