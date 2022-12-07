import './classic-tea.styles.scss';

const ClassicTea = () => {
  return (
    <div className="real-life-tea-container">
      <h2>Breakfast club</h2>
      <img
        src={`${process.env.PUBLIC_URL}/images/tea-navigation-icons/breakfast-bg.png`}
        alt=""
      />
      <p>
        Black classical tea, tart, fragrant with a rich infusion and a taste
        that sounds like the choir "Glory" - polyphony of notes, energy and
        brightness.
      </p>

      <div
        className="classic-page-bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/test-bg.jpg)`,
        }}
      >
        <div className="gradient-styled"></div>
      </div>

      {/* <div className="tea-section-catalogue">
        {teaProducts &&
          teaProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div> */}
    </div>
  );
};

export default ClassicTea;
