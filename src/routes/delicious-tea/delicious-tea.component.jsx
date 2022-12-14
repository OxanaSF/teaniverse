import './delicious-tea.styles.scss';

const DeliciousTea = () => {
  return (
    <div className="delicious-tea-container">
      <h2>Delicious</h2>
      <img
        src={`${process.env.PUBLIC_URL}/images/tea-navigation-icons/sweet-tea-icon.png`}
        alt="plate of fruits"
      />
      <p>
        Of course, everyone has own "delicious". We noticed that in 95% of cases
        buyers think of varieties with berry or flower additives, with a
        sweetish, but not cloying taste and a bright tea base. This is what we
        recommend here!
      </p>

      <div
        className="delicious-page-bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/delicious-tea-bg.jpeg)`,
        }}
      >
        <div className="gradient-styled"></div>
      </div>
    </div>
  );
};

export default DeliciousTea;
