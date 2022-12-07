// import { HoverSlideshow } from 'react-hover-slideshow';

import './slide-show-hover.styles.scss';

const SlideShowHover = () => {
  // eslint-disable-next-line
  const imageURLs = [
    // 'https://www.chay.info/upload/iblock/97d/97d96fedf2ab072d541ca7059c90d63a.webp',
    'https://www.chay.info/upload/iblock/71a/71af611d62d44bb1f1aba467d4507f86.webp',
    'https://www.chay.info/upload/iblock/f59/f592366e36ef111e16d40b0ad4bd0db0.webp',
    'https://www.chay.info/upload/iblock/f38/f38d5658577a3909982f9dec0129eb0f.webp',
    'https://www.chay.info/upload/iblock/a33/a33937494aef71104ff0ecd1e1d6260e.webp',
    'https://www.chay.info/upload/iblock/99f/99ff03f908c328857a17ab68e39e5c18.webp',
    // 'https://www.chay.info/upload/iblock/049/049048ba4a3e980725bdc9e20523ff5b.webp',
    'https://www.chay.info/upload/iblock/6fa/6fad8b05d9e8edf35a2d3baa4557dc3d.webp',
    'https://www.chay.info/upload/iblock/c43/c436f0a926f924fac009ca29d33e1f1d.webp',
    'https://www.chay.info/upload/iblock/2c8/2c8041477e95426cfb78457c3a390716.webp',
    'https://www.chay.info/upload/iblock/ea5/ea5ba47bd4514d94d87567ef4e2e366e.webp',
    // 'https://www.chay.info/upload/iblock/e17/e17b827ff1efde3def483c0c3a052240.webp',
    // 'https://www.chay.info/upload/iblock/5a0/5a04033a6a7bff6d0089e436420c33d8.webp',
    // 'https://www.chay.info/upload/iblock/4ab/4ab715f0d238560e4d873be72edbf5fb.webp',
    'https://www.chay.info/upload/iblock/514/5145a73f9089338c7896b0010cab3f66.webp',
  ];

  return (
    <section className="hover-slideshow-container">
      <h1>Explore more Flavors</h1>
      {/* <HoverSlideshow
        className="hover-slideshow"
        aria-label="My pretty picture slideshow"
        images={imageURLs}
        width="700px"
        height="600px"
        display="flex"
        alignItems="center"
        
      ></HoverSlideshow> */}
    </section>
  );
};

export default SlideShowHover;
