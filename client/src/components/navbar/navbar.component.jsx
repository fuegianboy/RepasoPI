import './navbar.styles.css';

function Navbar() {
  return (
    <div className='search-box'>
      <form>
        <input placeholder='Busqueda...'></input>
        <button>Buscar</button>
      </form>
    </div>
  );
}

export default Navbar ;
