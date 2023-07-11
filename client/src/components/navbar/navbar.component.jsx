import './navbar.styles.css';

function Navbar({handleChange, handleSubmit}) {  // trae las dos funciones que vienen de home en props, se destructura
  return (
    <div className='search-box'> 
      <form onChange={handleChange}> 
        <input placeholder='Busqueda...' type="search"></input>
        <button type="submit" onClick={handleSubmit}>Buscar</button>
      </form>
    </div>
  );
}
// el formulario, al cambiar hace handleChange
// el imput recibe lo que escribamos
// el button, al hacer onClick, ejecuta handleSubmit
export default Navbar ;
