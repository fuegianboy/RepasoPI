import './card.styles.css';

function Card({user}) {
  console.log(user)
  const{name, email, phone, address, website} = user
  return (
    <div className='card-container'>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{address.street}</p>
      <p>{address.suite}</p>
      <p>{address.street}</p>
      <p>{address.city}</p>
      <p>{website}</p>
    </div>
  );
}

export default Card ;
