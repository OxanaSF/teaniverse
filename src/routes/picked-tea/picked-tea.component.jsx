// import { useState, useContext, useEffect } from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Category
import {
  selectCategoriesMap,
  selectIsLoading,
} from '../../store/categories/category.selector';

//Param
import { selectCurrentParam } from '../../store/param/param.selector';
import { setCurrentParam } from '../../store/param/param.action';

// Product
import { selectCurrentProduct } from '../../store/product/product.selector';
import { setCurrentProduct } from '../../store/product/product.action';

import { useParams } from 'react-router-dom';

import CheckoutForm from '../../components/checkout-form/checkout-form.component';
import Spinner from '../../components/spinner/spinner.component';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import './picked-tea.styles.scss';

const PickedTea = () => {
  const currentParam = useSelector(selectCurrentParam);
  const currentProduct = useSelector(selectCurrentProduct);

  const categoriesMap = useSelector(selectCategoriesMap);

  const [teaProducts, setTeaProducts] = useState(categoriesMap['tea']);
  const [pickedTea, setPickedTea] = useState(categoriesMap['tea']);

  const dispatch = useDispatch();

  const { name } = useParams();

  // useEffect(() => {
  //   dispatch(setCurrentParam(name));
  // }, [name, dispatch]);

  useEffect(() => {
    setTeaProducts(categoriesMap['tea']);
  }, [categoriesMap]);

  console.log('currentParam', currentParam);


  useEffect(() => {
    console.log(teaProducts)
    if(teaProducts && teaProducts.length !== 0) {
      const filteredTea = teaProducts.filter((tea) => tea.name === name);
      // setPickedTea(filteredTea[0]);
      console.log('filteredTea[0]', filteredTea[0])
      dispatch(setCurrentProduct(filteredTea[0]));
    }
    
   
   
  }, [name, dispatch, teaProducts, currentParam]);

  // console.log('NOW', { teaProducts });
  // console.log('NOW pickedTea', pickedTea);
  console.log('NOW currentProduct', currentProduct);

  // name, imageUrl, description, price

if (!currentProduct) {
  return <Spinner />
}


  return (
    <div className="picked-tea">
      <h2>{currentProduct.name}</h2>

      <div className="picked-tea-container">
        <div className="picked-tea-left-col">
          <Carousel className="carousel" autoPlay={true} infiniteLoop={true}>
            {currentProduct.imageUrl && <img src={currentProduct.imageUrl} alt="tea" />}
            {currentProduct.images &&
              currentProduct.images.map((img, index) => (
                <img key={index} className="carousel-img" src={img} alt="tea" />
              ))}
          </Carousel>
        </div>

        <div className="picked-tea-right-col">
          <div className="picked-tea-description">
            <p>{currentProduct.description}</p>

            <div className="picked-tea-consist">
              <div>Mix</div>
              <div className="picked-tea-consist-items">
                {currentProduct.consist &&
                  currentProduct.consist.map((el, index) => (
                    <div key={index} className="picked-tea-consist-item">
                      <img src={el.ingrUrl} alt={el.ingrName} />
                      <div>{el.ingrName}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <CheckoutForm />
        </div> 
      </div> 
    </div>
  );
};

export default PickedTea;
