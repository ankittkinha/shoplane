import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
    return (
        <div>
            <Navbar />
            <div class="card text-center mt-5" style={{width: "50%", margin: "auto"}}>
                <div class="card-header">
                    <h6>Requested Page doesn't exist</h6>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Click below to go to our Homepage</h5>
                    <Link to={"/"} class="btn btn-primary btn-clr"><span className='btn-txt-clr'>Homepage</span></Link>
                </div>
            </div>
        </div>
    )
}
