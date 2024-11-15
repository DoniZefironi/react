import React, { useState, useEffect } from 'react';
import './SectionFurniture.css';
import data from '../../data/dataFood.json';

function Boxfurniture() {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    setItems(data);
  }, []);

  const addItem = () => {
    const newItem = { id: Date.now(), name: `Блюдо ${items.length + 1}`, description: `Описание блюда ${items.length + 1}`};
    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (id, newName) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, name: newName };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const toggleSelectItem = (id) => {
    setSelectedItems(selectedItems.includes(id)
      ? selectedItems.filter(itemId => itemId !== id)
      : [...selectedItems, id]);
  };

  const openModal = (item) => {
    setCurrentItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentItem(null);
  };

  const handleInputChange = (e) => {
    const newName = e.target.value;
    setCurrentItem({ ...currentItem, name: newName });
    editItem(currentItem.id, newName);
  };

  return (
    <div className="SectionFurniture">
      <h1>Блюда</h1>
      <button onClick={addItem}>Добавить</button>
      <ul>
      {items.map(item => (
  <li
    key={item.id}
    onClick={() => toggleSelectItem(item.id)}
    style={{ backgroundColor: selectedItems.includes(item.id) ? 'lightblue' : 'white' }}
  >
    {item.img && <img src={item.img} alt={item.name} />} 
    <div>
      <p>{item.name}</p>
      <button onClick={(e) => { e.stopPropagation(); openModal(item); }}>Посмотреть</button>
      <button onClick={(e) => { e.stopPropagation(); deleteItem(item.id); }}>Удалить</button>
    </div>
  </li>
))}
      </ul>

      {modalIsOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            {currentItem && (
              <div>
                <h2>{currentItem.name}</h2>
                <p>{currentItem.description}</p>
                <input
                  type="text"
                  value={currentItem.name}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Boxfurniture;