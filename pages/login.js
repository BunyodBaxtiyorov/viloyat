import React from 'react'
import Lottie from 'react-lottie'
import { useRouter } from 'next/dist/client/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'

import {auth, provider} from '../app/config/firebase'

const login = () => {
    const router = useRouter()

    React.useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])

    return (
        <div className="loginContainer">
            <div className="loginLogoContainer">
                <img src="https://i.ibb.co/n6LWQM4/Post.png" alt="logo" />
            </div>
            <div className="loginAnimationContainer">
                <Lottie options={{animationData: require('../app/assets/lottie/car-loading.json')}}/>
            </div>
            <h1>Hisobingizga kirish uchun tizimga kiring</h1>
            <div className="loginBtnContainer">
                <button className="btn" onClick={() => {signInWithPopup(auth, provider)}}><h2>Sign in with Google</h2></button>
            </div>
        </div>
    )
}

export default login
