import React from 'react';
import './food.css';

export default function Acord() {
  return (
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Рыбные деликатесы
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>"Рыбные деликатесы" - изысканное блюдо, </strong> состоящее из различных видов рыбы и морепродуктов, приправленных специями и приправами, приготовленных различными способами, такими как запекание, жарка или гриль. Обычно украшается лимоном, зеленью и другими элементами для эстетического вида. Это блюдо ценится за изысканный вкус, высокое качество ингредиентов и подготовку с акцентом на детали.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Русский малосол
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>"Русский малосоль" -</strong> традиционный способ консервирования овощей и рыбы в слабом рассоле с минимальным содержанием соли. Этот метод сохраняет свежесть и натуральный вкус продуктов, делая их более нежными и сочными.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Хлебная корзина с чесночным маслом
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Хлебная корзина с чесночным маслом - </strong> это аппетитное закусочное блюдо, которое обычно подают в ресторанах или кафе. Оно включает в себя разнообразные виды свежеиспеченного хлеба, такие как багет, фокачча или другие сорта, которые подаются вместе с ароматным чесночным маслом.
      </div>
    </div>
  </div>
</div>
  );
}