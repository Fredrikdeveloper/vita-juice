import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const [pass, setPass] = useState("")
    const navigate = useNavigate()
    const juiceToken = "juiceToken"
    return (
        <div className='admin-login-menu'>
            <input value={pass} onChange={(e) => setPass(e.target
                .value)} type='password' />
                {pass === "admin123" ? (
                    <button className='btn btn-success' onClick={() => {
                        navigate("/adminPrivat")
                        localStorage.setItem("juiceToken", juiceToken)
                    }}>Submit</button>
                ) : (
                    <button className='btn btn-success' onClick={() => window.location.reload()}>Submit</button>
                )}
        </div>
    )
}

export default AdminLogin