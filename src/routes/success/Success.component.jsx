import './success.styles.styles.scss';

const Success = () => {
  return (
    <section className='success-container'>
      <img src={`${process.env.PUBLIC_URL}/images/gift-box-wood.jpg`} alt="gift box on woods" />
      <h1>Thank you for your purchase!</h1>
    </section>
  );
};

export default Success;
