"use server"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import * as jose from 'jose'

//Signup action for students
export const studentSignup = async (currentState: any, formData: FormData): Promise<string> => {
    // Get data off form 
    const email = formData.get('email')
    const username = formData.get('username')
    const password = formData.get('password')
    const faculty = formData.get('faculty')
    const department = formData.get('department')
    const areasOfFocus = formData.get('areasOfFocus') as string

    const areasOfFocusArray = areasOfFocus.split(', ')

    if (!faculty || !department) {
        return 'select your faculty and department'
    }

    //Send data to signup endpoint
    const res = await fetch(process.env.ROOT_URL + '/api/student/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password, faculty, department, areasOfFocusArray })
    })

    const data = await res.json()

    //Redirect to login if success
    if(res.ok) {
        redirect('/login')
    } else {
        return data.message
    }
}

//Signup action for alumni
export const alumniSignup = async (currentState: any, formData: FormData): Promise<string> => {
    // Get data off form 
    const email = formData.get('email')
    const username = formData.get('username')
    const password = formData.get('password')
    const jobTitle = formData.get('jobTitle')
    const areasOfFocus = formData.get('areasOfFocus') as string

    const areasOfFocusArray = areasOfFocus.split(', ')

    //Send data to signup endpoint
    const res = await fetch(process.env.ROOT_URL + '/api/alumni/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password, jobTitle, areasOfFocusArray })
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
    const userType = formData.get('usertype')

    console.log('usertype:', userType)

    if(!userType) {
        return 'Select a User Type'
    }

    // If user type is alumni, use alumni login endpoint instead
    if (userType === 'alumni') {
        const res = await fetch(process.env.ROOT_URL + '/api/alumni/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
        })
    
        const data = await res.json()
            
        //Redirect to login if success
        if(res.ok) {
            // console.log(data)
            // Create jwt token
            const secret = new TextEncoder().encode(process.env.JWT_SECRET)
            const alg = 'HS256'

            const jwt = await new jose.SignJWT(data.data)
            .setProtectedHeader({ alg })
            .setExpirationTime("72h")
            .setSubject(data.data.id.toString())
            .sign(secret)

            cookies().set("alumniAuth", jwt, {
                secure: true,
                httpOnly: true,
                expires: Date.now() + 24 * 60 * 60 * 1000 * 3, // 3 Days
                path: '/',
                sameSite: 'strict'
            })

            redirect('/alumni/dashboard')
        } else {
            return data.message
        }
    }

    //Send data to signup endpoint
    const res = await fetch(process.env.ROOT_URL + '/api/student/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
    })

    const data = await res.json()

    // cookies().set("Authorization", data.token, {
    //     secure: true,
    //     httpOnly: true,
    //     expires: Date.now() + 24 * 60 * 60 * 1000 * 3, // 3 Days
    //     path: '/',
    //     sameSite: 'strict'
    // })

    //Redirect to login if success
    if(res.ok) {
        // console.log(data)
        cookies().set("studentAuth", data.token, {
            secure: true,
            httpOnly: true,
            expires: Date.now() + 24 * 60 * 60 * 1000 * 3, // 3 Days
            path: '/',
            sameSite: 'strict'
        })
        redirect('/student/dashboard')
    } else {
        return data.message
    }
}

//Student Logout
export const studentLogout = async(currentState: any) => {
    cookies().set('studentAuth', '', { expires: new Date(0) })
    redirect('/')
}

//Alumni Logout
export const alumniLogout = async(currentState: any) => {
    cookies().set('alumniAuth', '', { expires: new Date(0) })
    redirect('/')
}

//Create an event
export const createEvent = async(currentState: any, formData: FormData) => {
    let authorId
    // Get authorId
    const cookie = cookies().get('alumniAuth') 
    
    //Validate it
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const jwt = cookie!.value
    
    try {
        const { payload } = await jose.jwtVerify(jwt, secret, {
            algorithms: ['HS256']
        })
        authorId = payload.id        
    } catch(err) { 
        console.log(err)
    }

    //Get Data off form 
    const title = formData.get('eventTitle')
    const description = formData.get('eventDescription')
    const category = formData.get('eventType')
    const date = formData.get('date')
    const time = formData.get('time')
    const location = formData.get('location')

    if (!category) {
        return 'select a category'
    }

    if (!location) {
        return 'select a location'
    }

    // Create an Event
    const res = await fetch(process.env.ROOT_URL + '/api/alumni/events', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, category, date, time, location, authorId })
    })

    const data = await res.json()

    //Redirect to login if success
    if(res.ok) {
        redirect('/alumni/events')
    } else {
        return data.message
    }
}

//Publish resource
export const createBlog = async(currentState: any, formData: FormData) => {
    let authorId
    // Get authorId
    const cookie = cookies().get('alumniAuth') 
    
    //Validate it
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const jwt = cookie!.value
    
    try {
        const { payload } = await jose.jwtVerify(jwt, secret, {
            algorithms: ['HS256']
        })
        authorId = payload.id        
    } catch(err) { 
        console.log(err)
    }

    //Get data off form
    const title = formData.get('title')
    const body = formData.get('content')

    // Create an Resource
    const res = await fetch(process.env.ROOT_URL + '/api/alumni/resources', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body, authorId })
    })
    
    const data = await res.json()
    
    //Redirect to login if success
    if(res.ok) {
        redirect('/alumni/resources')
    } else {
        return data.message
    }
}

//Get userId
export const getUserId = async() => {
    //Check if Alumni cookie exists
    if (cookies().has('alumniAuth')) {
        //check for cookie
        const cookie = cookies().get('alumniAuth') 
    
        //Validate it
        const secret = new TextEncoder().encode(process.env.JWT_SECRET)
        const jwt = cookie!.value
        
        try {
            const { payload } = await jose.jwtVerify(jwt, secret, {
            algorithms: ['HS256']
            })
            return payload    
    
        } catch(err) { 
            console.log(err)
        }

    //Check if student cookie exists
    } else if (cookies().has('studentAuth')) {
        //check for cookie
        const cookie = cookies().get('studentAuth') 
    
        //Validate it
        const secret = new TextEncoder().encode(process.env.JWT_SECRET)
        const jwt = cookie!.value
        
        try {
            const { payload } = await jose.jwtVerify(jwt, secret, {
                algorithms: ['HS256']
            })
            return payload   
    
        } catch(err) { 
            console.log(err)
        }

    //If neither cookies exist
    } else {
        redirect('/login')
    }
}