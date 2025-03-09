import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from './components/ItemsBackup';
import Categories from './components/Categories';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Кожанный стул',
          img: 'chair.jpg',
          desc: 'Премиальный кожаный игровой стул с эргономичным дизайном',
          category: 'Cтулья',
          price: '12.999'
        },
        {
          id: 2,
          title: 'Шкаф',
          img: 'closet.jpeg',
          desc: 'Современный, минималистический шкаф с раздвижными дверцами',
          category: 'Шкафы',
          price: '25.999'
        },
        {
          id: 3,
          title: 'Кровать',
          img: 'bed.jpg',
          desc: 'Комфортная кровать размера queen size с ортопедическим матрасом',
          category: 'Кровати',
          price: '24.999'
        },
        {
          id: 4,
          title: 'Стол',
          img: 'table.jpg',
          desc: 'Прочный деревянный игровой стол с закаленным стеклом',
          category: 'Столы',
          price: '10.999'
        },
        {
          id: 5,
          title: 'Полка',
          img: 'shelf.jpg',
          desc: 'Прочная деревянная полка для украшений',
          category: 'Полки',
          price: '2.599'
        },
        {
          id: 6,
          title: 'Полка',
          img: 'shelf.jpg',
          desc: 'Прочная деревянная полка для украшений',
          category: 'Полки',
          price: '2.599'
        },
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if(category === 'all') { 
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
   this.setState({orders: this.state.orders.filter(el => el.id !== id)})
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
