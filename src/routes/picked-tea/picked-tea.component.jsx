//import { useState, useContext, useEffect } from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Category
import { selectCategoriesMap } from '../../store/categories/category.selector';

//Product
import { selectCurrentProduct } from '../../store/product/product.selector';
import { setCurrentProduct } from '../../store/product/product.action';

import { useParams } from 'react-router-dom';

import Spinner from '../../components/spinner/spinner.component';

//Cart
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

//Carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel/index';

import FavoriteIconPrivate from '../../components/favorite-icon-private/favorite-icon-private.component';

import './picked-tea.styles.scss';

const PickedTea = () => {
  //Selectors
  const cartItems = useSelector(selectCartItems);
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

  const addProductToCartHandler = () => {
    dispatch(addItemToCart(cartItems, currentProduct, 'some email'));
  };

  if (!currentProduct) {
    return <Spinner />;
  }

  return (
    <div className="picked-tea">
      <div className="picked-tea-title-container">
        <h2>{currentProduct.name}</h2>
        <div className="picked-tea-heart">
          <FavoriteIconPrivate product={currentProduct} />
        </div>
      </div>

      <div className="picked-tea-container">
        <div className="picked-tea-left-col">
          <Carousel
            className="carousel"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
          >
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
              <div>
                <h4>Mix</h4>
              </div>
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
            <div className="picked-tea-taste">
              <div>
                <h4>Taste:</h4>
                <span> {currentProduct.consist && currentProduct.taste}</span>
              </div>
            </div>

            <div className="product-card-footer">
              <button onClick={addProductToCartHandler} className="bag-button">
                <p className="product-card-footer-price">
                  ${currentProduct.price}
                </p>

                <img
                  src={`${process.env.PUBLIC_URL}/images/shopping-bag.png`}
                  alt="shopping bag icon"
                />
              </button>

              <div className="favorite-icon-private-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickedTea;
