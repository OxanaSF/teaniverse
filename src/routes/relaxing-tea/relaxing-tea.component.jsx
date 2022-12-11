import './relaxing-tea.styles.scss';

const RelaxingTea = () => {
  return (
    <div className="real-life-tea-container">
      <h2>Relaxing</h2>
      <img
        src={`${process.env.PUBLIC_URL}/images/tea-navigation-icons/relaxing-tea-icon.png`}
        alt="plate of fruits"
      />
      <p>
        In this selection, there are teas with ingredients that have a slight
        sedative effect. Valerian, chamomile, lemon balm. Everything you need to
        calm down and sleep well.
      </p>

      <div
        className="relaxing-tea-page-bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/relaxing-tea.jpeg)`,
        }}
      >
        <div className="gradient-styled"></div>
      </div>
    </div>
  );
};

export default RelaxingTea;
