import './curious -tea.styles.scss';

const CuriousTea = () => {
  return (
    <div className="curious-tea-container">
      <h2>Curious</h2>
      <img
        src={`${process.env.PUBLIC_URL}/images/tea-navigation-icons/unusual-tea-icon.png`}
        alt="plate of fruits"
      />
      <p>
        Ingredients that are not expected to be seen in tea, but which bring
        their own note to the blend.
      </p>

      <div
        className="delicious-page-bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/curious-bg.jpeg)`,
        }}
      >
        <div className="gradient-styled"></div>
      </div>
    </div>
  );
};

export default CuriousTea;
