import Image from "next/image";
import LandingNav from "./components/LandingNav";
import LandingCard from "./components/LandingCard";
import Link from "next/link";
import { cookies } from "next/headers";
import coders from '../public/students_infront_of_computer.jpg'
import { landingCards } from './cards'
// import LandingModal from "./components/landingModal";

export default function LandingPage() {

  const handleClick =  () => { 
    console.log('nav button clicked')
  }

  const isLoggedIn = cookies().get("Authorization")

  return (
    <>
      <LandingNav 
        // handleClick={handleClick} //FIXME: Passing functions to client components
      />

      <main className="flex flex-col gap-y-20 pt-12 w-4/5 mx-auto mb-6 relative">

        {/* HERO SECTION */}
        <div className="flex justify-center items-center gap-x-10">
          <div className="flex flex-col gap-y-6 max-w-[50%]">
            <h1 className="font-inter text-6xl font-bold ">
              Welcome to AlumConnect: <br />Where Connections Shape Future
            </h1>
            <p className="text-textGray font-satoshi font-medium">
              Connect with experienced alumni mentors and take your career to new heights. Gain valuable insights, guidance, and support to achieve your goals.
            </p>
            {!isLoggedIn ? 
              <div className="flex gap-x-4 font-satoshi">
                <Link className="text-sm py-1.5 px-4 rounded-md bg-primary text-white" href='#'>Sign Up as an Alumni</Link>
                <Link className="text-sm py-1.5 px-4 rounded-md border border-backgroundGray text-primary font-medium" href='/signup'>Sign Up as an Student</Link>
              </div>:
              
              <Link className="text-sm py-1.5 px-4 rounded-md bg-primary text-white w-fit" href='/student/alumnidirectory'>Meet Alumni </Link>
            }
          </div>

          <div className="w-1/2">
            <Image
              src={coders}
              alt="coders-infront-of-laptops"
              className="rounded-lg"
              priority
            />
          </div>
        </div>
        {/* HERO SECTION */}

        {/* Advantages of Alumni Mentorship */}
        <div>
          <h1 className="font-inter text-4xl font-semibold text-center">
            Unlock Your Potential with Alumni Mentorship
          </h1>
          <p className="font-satoshi text-xl text-textGray text-center">Our alumni mentorship program provides personalized guidance and support to help you achieve your career goals</p>
          
          <div className="flex w-full justify-around mt-8">
            {
              landingCards.map(card => (
                <LandingCard key={card.title} description={card.description} icon={card.icon} title={card.title}/>
              ))
            }
          </div>
        </div>
        {!isLoggedIn && <button className="w-fit py-2 px-8 bg-primary rounded-md text-white font-medium self-center">Join Now</button>}

        {/* <LandingModal /> */}
      </main>
    </>
  );
}
