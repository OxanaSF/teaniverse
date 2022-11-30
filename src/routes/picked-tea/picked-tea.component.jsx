// import { useState, useContext, useEffect } from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Category
import {
  selectCategoriesMap
} from '../../store/categories/category.selector';



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
  //Selectors
  const currentProduct = useSelector(selectCurrentProduct);
  const categoriesMap = useSelector(selectCategoriesMap);


  //States
  const [teaProducts, setTeaProducts] = useState(categoriesMap['tea']);

  const dispatch = useDispatch();

  const { name } = useParams();

  useEffect(() => {
    setTeaProducts(categoriesMap['tea']);
  }, [categoriesMap]);



  useEffect(() => {
    console.log(teaProducts);
    if (teaProducts && teaProducts.length !== 0) {
      const filteredTea = teaProducts.filter((tea) => tea.name === name);
      dispatch(setCurrentProduct(filteredTea[0]));
    }
  }, [name, dispatch, teaProducts]);

  // console.log('NOW currentProduct', currentProduct);

  if (!currentProduct) {
    return <Spinner />;
  }

  return (
    <div className="picked-tea">
      <h2>{currentProduct.name}</h2>

      <div className="picked-tea-container">
        <div className="picked-tea-left-col">
          <Carousel className="carousel" autoPlay={true} infiniteLoop={true}>
            {currentProduct.imageUrl && (
              <img src={currentProduct.imageUrl} alt="tea" />
            )}
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
