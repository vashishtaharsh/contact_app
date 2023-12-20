import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import './AddEdit.css'
import { toast } from 'react-toastify'
import fireDb from '../Firebase'

const initialState = {
    name: "",
    email: "",
    contact: ""
}

const AddEdit = () => {

    const [state, setState] = useState(initialState)
    const [data, setData] = useState({})

    const history = useNavigate("")

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const { id } = useParams()

    useEffect(() => {
        fireDb.child("contact").once("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() })
            }
            else {
                setData({})
            }
        })
    }, [id])

    useEffect(() => {
        if (id) {
            setState({ ...data[id] })
        } else {
            setState(initialState)
        }
        return () => {
            setState(initialState)
        }
    }, [id, data])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact) {
            toast.error("Please provide value in each filed")
        }
        else {
            if (!id) {
                fireDb.child("contact").push(state, (err) => {
                    if (err) {
                        toast.error(err)
                    } else {
                        toast.success("Contact added successfully")
                        setTimeout(() => history("/", { replace: false }), 500);
                    }
                })
            } else {
                fireDb.child(`contact/${id}`).set(state, (err) => {
                    if (err) {
                        toast.error(err)
                    } else {
                        toast.success("Contact updated successfully")
                        setTimeout(() => history("/", { replace: false }), 500);
                    }
                })
            }
        };
    }

    const { name, email, contact } = state

    return (
        <div style={{ marginTop: "100px" }}>
            <form style={{ margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center" }} onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type="text" id='name' name='name' placeholder='Your Name' value={name || ""} onChange={handleInputChange} />
                <label htmlFor='email'>Email</label>
                <input type="email" id='email' name='email' placeholder='Your Email' value={email || ""} onChange={handleInputChange} />
                <label htmlFor='contact'>Contact</label>
                <input maxLength="10" type="number" id='contact' name='contact' placeholder='Your Contact No.' value={contact || ""} onChange={handleInputChange} />

                <input type="submit" value={id ? "Update" : "Save"} />
            </form>
        </div>
    )
}

export default AddEdit