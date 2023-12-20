import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./Header.css"
import { useState } from 'react'

const Header = () => {
    const location = useLocation()

    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?name=${search}`)
        setSearch("")
    }

    const navigate = useNavigate()

    return (
        <div className='header'>
            <p className='logo'>Contact App</p>
            <div className='header-right'>
                <form onSubmit={handleSubmit}>
                    <input type="text" className='inputField' placeholder='Search Name' onChange={(e) => setSearch(e.target.value)} value={search} />
                </form>
                <Link to="/">
                    <p className={`${location.pathname === "/" ? "active" : ""}`}>
                        Home
                    </p>
                </Link>
                <Link to="/add">
                    <p className={`${location.pathname === "/add" ? "active" : ""}`}>
                        Add Contact
                    </p>
                </Link>
                <Link to="/about">
                    <p className={`${location.pathname === "/about" ? "active" : ""}`}>
                        About
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default Header