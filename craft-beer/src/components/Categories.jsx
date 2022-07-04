import React from 'react';

//вынес вне компоненты т.к. сдесь константы по сути
const categories = [
  'Все',
  'Эли светлые',
  'Эли темные',
  'Портер',
  'Стаут',
  'Sour Ale'
];

const Categories = () =>{
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  const onClickCategory = (index) => {
    setActiveIndex(index);
  }
    return(
      <div className="categories">
        <ul>
          {categories.map((value, i) =>  
            <li key={i} onClick={() => onClickCategory(i)} className={activeIndex === i ? 'active' : ''}>
              {value}
            </li>)}
        </ul>
      </div>
    )
}

  export default Categories;