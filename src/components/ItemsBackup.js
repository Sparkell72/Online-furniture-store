import React, { Component } from 'react';
import ItemRope from './ItemRope';

export class ItemsBackup extends Component {
  render() {
    return (
        <main>
          {this.props.items.map(el => (
            <ItemRope key={el.id} item={el} onAdd={this.props.onAdd} />
        ))}
        </main>
    )
  }
}

export default ItemsBackup; 
