import React, { Component } from 'react'
import ItemsBackup from './ItemsBackup'

export class ItemRope extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <h2>{this.props.item.price}₽</h2>
        <div className='add-to-cart' onClick={()=> this.props.onAdd(this.props.item)}>+</div>
      </div>
    )
  }
}

export default ItemRope