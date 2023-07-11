import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import {getUsers} from "../../redux/actions"

import Navbar from '../../components/navbar/navbar.component';
import Cards from '../../components/cards/cards.component';
import './home.styles.css';

function Home() {

  const dispatch = useDispatch()
  const allUsers = useSelector((state) => state.allUsers)

  useEffect(()=>{
    dispatch(getUsers())
  }, [dispatch])


  return (
    <div className='home'>
      <h2 className='home-title'>Home home</h2>
      <Navbar/>
      <Cards allUsers={allUsers}/>
    </div>
  );
}

export default Home ;
