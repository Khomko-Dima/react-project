import React, { useState } from "react";
import Button from "./button";


const BeerBlock = ({ title, price, image, sizes, types}) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [typeContainer, setTypeContainer] = useState('бутылочное');
  // const typeContainer = ['бутылочное', 'разливное'];
  
  const handler = () => {
    console.log('click')
  }
  
  return(
    <div className="pizza-block">
      <img className="pizza-block__image" src={image} alt={''} />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((typeId) => (
            <li
              key={typeId}
              onClick={() => setActiveType(typeId)}
              className={activeType === typeId ? 'active' : '' }>
                {typeContainer[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li key={size} onClick={() => setActiveSize(i)} className={activeSize === i ? 'active' : '' }>{size} l</li>
          ))}
        </ul>
    </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{price}</div>
        {/*Вынес в отдельный компонент каторый принимает количество и функцию при клике*/}
        <Button count={0} handler={handler}/>
      </div>
    </div>
  )
}

export default BeerBlock;