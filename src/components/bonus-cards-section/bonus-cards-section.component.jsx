import './bonus-cards-section.styles.scss';

const BonusCardsSection = () => {
  return (
    <section className="action-section">
      <div className="action-section-text">
        <h2>Bonus card</h2>
        <p>Get discounts, bonuses and more with the Teaniverse Bonus Card</p>
      </div>

      <div className="card-fan">
        <img
          src={`${process.env.PUBLIC_URL}/images/bonus-cards/bonus-card1.png`}
          alt="bonus card one"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/bonus-cards/bonus-card2.png`}
          alt="bonus card one"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/bonus-cards/bonus-card3.png`}
          alt="bonus card one"
        />
      </div>

      <button className="btn">Learn more</button>
    </section>
  );
};

export default BonusCardsSection;
