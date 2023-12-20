import React, { useState, useEffect } from 'react'
import fireDb from '../Firebase'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {

    const [data, setData] = useState()

    useEffect(() => {
        fireDb.child("contact").once("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() })
            }
            else {
                setData({})
            }
        })

        return setData({})
    }, [])

    function remove(e) {
        if (window.confirm("Are you sure you want to delete this contact")) {
            fireDb.child(`contact/${e}`).remove((err) => {
                if (err) {
                    toast.error(err)
                } else {
                    toast.success("Contact deleted successfully")
                }
            })
            fireDb.child("contact").once("value", (snapshot) => {
                setData({ ...snapshot.val() })
            })
        }
    }

    return (
        <div style={{ marginTop: "100px" }}>
            <table className='styled-table'>
                <thead>
                    <th style={{ textAlign: "center" }}>No.</th>
                    <th style={{ textAlign: "center" }}>Name</th>
                    <th style={{ textAlign: "center" }}>Email</th>
                    <th style={{ textAlign: "center" }}>Contact</th>
                    <th style={{ textAlign: "center" }}>Actions</th>
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
                                        <td>
                                            <Link to={`/update/${key}`}>
                                                <button className='btn-edit'>Edit</button>
                                            </Link>
                                            <button className='btn-delete' onClick={() => remove(key)}>Delete</button>
                                            <Link to={`/view/${key}`}>
                                                <button className='btn-view'>View</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            }) : ""
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home