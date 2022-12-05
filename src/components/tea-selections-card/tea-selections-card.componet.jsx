import './tea-selections-card.styles.scss'

const TeaSelectionsCard = ({ item }) => {
  return (
    <div className="selections-item-container">
       <div
        className="selection-card-bg"
        style={{
          backgroundImage: `url(${item.url})`,
        }}
      ></div>
      <h3>{item.h3}</h3>
    </div>
  )
}

export default TeaSelectionsCard