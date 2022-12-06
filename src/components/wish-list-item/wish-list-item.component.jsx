import './wish-list-item.styles.scss';

const WishListItem = ({ wishListItem }) => {
  const { name, imageUrl, price, description } = wishListItem;

  return (
    <div className="wish-list-item-container">
      <div className="img-anime-container">
        <img className="img1" src={imageUrl} alt={name} />
      </div>
      <div className='wish-list-item-details'>
        <h2>{name}</h2>
        <h3>${price}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WishListItem;
