import Card from "../card/card.component"
import './cards.styles.css';

function Cards() {
  return (
    <div className="card-list">
        {/* <p>Esta es CARDS  que contiene 2 CARD</p> */}
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  );
}

export default Cards ;
