import './footer.styles.scss';

const Footer = () => {
  return (
    <footer>
      <div
        className="real-life-page-bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bicycle.png)`,
        }}
      >
        <div class="div1">
          <h3>Tea</h3>
          <ul>
            <li> View all</li>
            <li>Black tea</li>
            <li>Green tea</li>
            <li>Green related tea</li>
            <li>White tea</li>
            <li>Yellow tea</li>
            <li>Oolong</li>
            <li>Pu'er tea</li>
            <li>Mate</li>
            <li>Rooibos</li>
            <li>Fruit and herbal tea</li>
            <li>Green tea with additives</li>
            <li>Black tea with additives</li>
            <li>Pound of tea, -40%</li>
            <li>Tea in pyramids</li>
            <li>Tea sets</li>
          </ul>
        </div>
        <div class="div2">
          <h3>Coffee</h3>
          <ul>
            <li>View all</li>
            <li>Flavored coffee</li>
            <li>Plantation coffee</li>
            <li>Espresso blends</li>
            <li>Coffee capsules</li>
            <li>Drip coffee</li>
            <li>Pound coffee, -40%</li>
          </ul>
        </div>
        <div class="div3">
          <h3>Sweets</h3>
          <ul>
            <li>View all</li>
            <li>Jams, preserves and syrups</li>
            <li>Sugar and candy</li>
            <li>Honey</li>
            <li>Nougat</li>
            <li>Nuts and fruits in chocolate</li>
            <li>Middle Eastern sweets</li>
            <li>Marmalade</li>
            <li>Chocolate</li>
          </ul>
        </div>
        <div class="div4">
          <h3>Present</h3>
          <ul>
            <li>View all</li>
            <li>Dessert coffee</li>
            <li>Green tea</li>
            <li>Green tea with additives</li>
            <li>Coffee</li>
            <li>Plantation coffee</li>
            <li>Gift Certificate</li>
            <li>Sweets</li>
            <li>Black tea</li>
            <li>Black tea with additives</li>
          </ul>
        </div>
        <div class="div5">
          <h3>Teaniverse academy </h3>
          <ul>
            <li>View all</li>
            <li>Tea academy</li>
            <li>Coffee academy</li>
          </ul>
        </div>
        <div class="div6">
          <h3>Tableware</h3>
          <ul>
            <li>View all</li>
            <li>Accessories</li>
            <li>Tea and coffee storage containers</li>
            <li>Utensils for tea ceremonies</li>
            <li>Sieves</li>
            <li>Turks, coffee makers</li>
            <li>Kettles</li>
            <li>Tea pairs, mugs, cups</li>
            <li>Ethnic dishes</li>
          </ul>
        </div>
        <div class="div7">
            <h3>Package</h3>
            <ul>
                <li>View all</li>
                <li>Baskets, chests, caskets, pallets</li>
                <li>Boxes</li>
                <li>Bags</li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
