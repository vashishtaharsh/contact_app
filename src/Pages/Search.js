import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import fireDb from '../Firebase'
import './Search.css'

const Search = () => {

    const [data, setData] = useState({})

    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }

    let query = useQuery()
    let search = query.get("name")
    console.log(search);

    useEffect(() => {
        searchData()
    }, [search])

    const searchData = () => {
        fireDb.child("contact").orderByChild("name").equalTo(search).once("value", (snapshot) => {
            if (snapshot.val()) {
                const data = snapshot.val()
                setData(data)
            }
            else {
                setData(data)
            }
        })
    }

    return (
        <>
            <div style={{ marginTop: "100px" }}>
                {
                    Object.keys(data).length === 0 ? (
                        <h2>No search result found for : {search}</h2>
                    ) : (
                        <table className='styled-table'>
                            <thead>
                                <th style={{ textAlign: "center" }}>No.</th>
                                <th style={{ textAlign: "center" }}>Name</th>
                                <th style={{ textAlign: "center" }}>Email</th>
                                <th style={{ textAlign: "center" }}>Contact</th>
                            </thead>
                            <tbody>
                                {
                                    data ?
                                        Object.keys(data).map(function (key, index) {
                                            return (
                                                <tr key={key}>
                                                    <td>{index + 1}</td>
                                                    <td>{data[key].name}</td>
                                                    <td>{data[key].email}</td>
                                                    <td>{data[key].contact}</td>
                                                </tr>
                                            )
                                        }) : ""
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        </>
    )
}

export default Search