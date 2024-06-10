"use server"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

//Signup action
export const signup = async (currentState: any, formData: FormData): Promise<string> => {
    // Get data off form 
    const email = formData.get('email')
    const username = formData.get('username')
    const password = formData.get('password')

    //Send data to signup endpoint
    const res = await fetch(process.env.ROOT_URL + '/api/student/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password })
    })

    const data = await res.json()

    //Redirect to login if success
    if(res.ok) {
        redirect('/login')
    } else {
        return data.message
    }
}

//Login action
export const login = async (currentState: any, formData: FormData): Promise<string> => {
    // Get data off form 
    const email = formData.get('email')
    const password = formData.get('password')

    //Send data to signup endpoint
    const res = await fetch(process.env.ROOT_URL + '/api/student/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
    })

    const data = await res.json()

    cookies().set("Authorization", data.token, {
        secure: true,
        httpOnly: true,
        expires: Date.now() + 24 * 60 * 60 * 1000 * 3, // 3 Days
        path: '/',
        sameSite: 'strict'
    })

    //Redirect to login if success
    if(res.ok) {
        // console.log(data)
        redirect('/student/dashboard')
    } else {
        return data.message
    }
}



