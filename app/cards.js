import { FaNetworkWired, FaUsers, FaShieldAlt } from 'react-icons/fa'

export const landingCards = [
    {
        title: 'Career Guidance',
        description: 'Receive personalized advice advice from experienced alumni mentors to help you navigate your career path and achieve your professional goals.',
        icon: <FaUsers className='text-primary' size={25} />
    },
    {
        title: 'Networking Opportunities',
        description: 'Connect with a diverse network of alumni mentors and peers to expand your professional connections and explore new opportunities.',
        icon: <FaNetworkWired className='text-primary' size={25} />
    },
    {
        title: 'Skill Developement',
        description: 'Gain valuale insights and learn new skills from your mentor to enhance your professional competencies and stand out in the job market.',
        icon: <FaShieldAlt className='text-primary' size={25} />
    }
]