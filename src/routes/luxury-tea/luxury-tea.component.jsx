import './luxury-tea.styles.scss';

const LuxuryTea = () => {
  return (
    <div className="real-life-tea-container">
      <h2>Luxury</h2>
      <img
        src={`${process.env.PUBLIC_URL}/images/tea-navigation-icons/expensive-tea-icon.webp`}
        alt="polygon decoration"
      />
      <p>
        Rich taste. What in bad texts is called "elite". Tea for special
        occasions, for status gifts, and for every day is suitable. In this
        selection, the most expensive varieties that are "worth it".
      </p>

      <div
        className="real-life-page-bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/spoons.jpeg)`,
        }}
      >
        <div className="gradient-styled"></div>
      </div>
    </div>
  );
};

export default LuxuryTea;
