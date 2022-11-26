import { useState, useContext, useEffect } from 'react';

import { useParams } from 'react-router-dom';

// import { CategoriesContext } from '../../context/categories.context';

import './picked-tea.styles.scss';

const PickedTea = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  // const [teaProducts, setTeaProducts] = useState(categoriesMap['tea']);
  const [pickedTea, setPickedTea] = useState([]);

  // const { name } = useParams(teaProducts);
  const { name } = useParams('');

  // useEffect(() => {
  //   setTeaProducts(categoriesMap['tea']);
  // }, [categoriesMap]);

  // useEffect(() => {
  //   const filteredTea = teaProducts.filter((tea) => tea.name === name)
  //   setPickedTea(filteredTea[0])
  // }, [teaProducts, name]);

  // console.log('NOW', { teaProducts });
  console.log('NOW', pickedTea);



  return (
    <div className="picked-tea">
      {/* <h2>{name}</h2> */}

      <div className="picked-tea-container">
     
        <div>Images Slide {pickedTea.name}</div>
        <div>Description</div>
        <div>Pricing and buy</div>
      </div>
    </div>
  );
};

export default PickedTea;
