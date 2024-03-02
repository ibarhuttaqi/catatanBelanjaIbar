import { useState } from "react";
import Item from "./Item";

export default function GroceryList({items, onDeleteItem, onToggleItem, onClearItems}) {
    const [sortBy, setSortBy] = useState('input');
    
    let sortedItems;
  
    // //cara 1 pake if banyak
    // if(sortBy === 'input') {
    //   sortedItems = items;
    // }
    // if(sortBy === 'name') {
    //   sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
    // }
    // if(sortBy === 'checked') {
    //   sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
    // }
  
    //cara 2 pake switch
    switch(sortBy) {
      case 'name':
        sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'checked':
        sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
        break;
      default:
        sortedItems = items;
    }
  
    return (
      <>
        <div className="list">
          <ul>
            {sortedItems.map((item) => ( //kurung buka kurung tutup pada arrow function (), untuk masuk ke mode html/jsx
              <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
            ))}
          </ul>
        </div>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Urutkan berdasarkan urutan input</option>
            <option value="name">Urutkan berdasarkan nama barang</option>
            <option value="checked">Urutkan berdasarkan ceklis</option>
          </select>
          <button onClick={onClearItems}>Bersihkan Daftar</button>
        </div>
      </>
    );
}