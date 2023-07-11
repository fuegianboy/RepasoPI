import Card from "../card/card.component"
import './cards.styles.css';

function Cards({allUsers}) {
  //const usersList = allUsers
  return (
    <div className="card-list">
        {allUsers?.map((user, index) =>(
            <Card user={user} key={index}/>
        ))}
    </div>
  );
}

export default Cards ;
