import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../../Context/authContext'
import './nastroyka.scss'


function Nastroyka() {
    const {setToken} = useContext(AuthContext)
    const handleLogaut =()=> {
        setToken(null)
    }
    return(
        <>
        <Link onClick={handleLogaut} to={'/login'} className='logauts'>Log aut</Link>
        </>
    )
}
export default Nastroyka