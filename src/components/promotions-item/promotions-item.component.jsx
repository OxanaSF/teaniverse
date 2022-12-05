


import './promotions-item.scss'

const PromotionsItem = ({ item }) => {
  return (
    <div className="promotions-item-container">
      <h4>{item.h1}</h4>
      <p>
       {item.text}
      </p>
      <div
        className="promotion-card-bg"
        style={{
          backgroundImage: `url(${item.url})`,
        }}
      >
      </div>
      <button>Explore</button>
    </div>
  );
};

export default PromotionsItem;
