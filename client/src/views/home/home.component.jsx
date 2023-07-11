import {useEffect, useState} from "react"  // hook q maneja ciclo de vida del componente, al montar, al actualizar, al desmontar.  
import {useDispatch, useSelector} from "react-redux"  // el dispatch para las acciones de redux, estado global
import {getUsers} from "../../redux/actions"  // me traigo la funcion getUser del redux/actions

import Navbar from '../../components/navbar/navbar.component';  // importo componente Nav
import Cards from '../../components/cards/cards.component';   // importo componente Cards ( cards luego tiene Card)

import './home.styles.css';

function Home() {

  const dispatch = useDispatch()  // creo el despachador de acciones??
  const allUsers = useSelector((state) => state.allUsers)  // estado global, me conecto

  const [filtered, setFiltered] = useState(allUsers) // Estados Locales, los inicializo con el estado global
  const [searchString, setSearchString] = useState("") // estados locales que lo inicializo en ""

function handleChange(e) {  // funcion que setea el estado local searchString en el valor ingresado en Navbar con el evento
  e.preventDefault() // para que no se reinice el componente
  setSearchString(e.target.value)  // setea el estado local searchString con el valor tomado de navbar del cuadro de texto
}

function handleSubmit(e){   // funcion que toma el 
  e.preventDefault()
  const filtered = allUsers.filter((user)=>
  user.name.includes(searchString)
  )
  setFiltered(filtered)
}


  useEffect(()=>{   // cuando se carga el componente, se ejecuta dispatch con la funcion getUser, trae los usuarios
    dispatch(getUsers())
  }, [dispatch])


  return (
    <div className='home'>
      <h2 className='home-title'>Home home</h2>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/> 
      <Cards allUsers={filtered}/>
    </div>
  );
}

// a Navbar le mandamos las dos funciones creadas para que modifiquen el estado
// a Cards le mandamos los usuarios filtrados

export default Home ;
