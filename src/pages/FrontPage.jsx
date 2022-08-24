import headshot from '../assets/profile/new.png'
import insta from '../assets/logos/insta.png'
import linkedin from '../assets/logos/linkedin.png'
import yt from '../assets/logos/yt.png'
import { motion } from 'framer-motion'
export default function FrontPage() {
    return (
      <div className='grid place-items-center min-h-screen'>
        <div class="p-8 rounded-lg shadow-lg lg:p-12">
        <div className='lg:flex items-center text-center lg:space-x-12 p-10'>
            <div>
              <img src={headshot} className="w-48 m-auto lg:w-80	bg-purple-900 rounded-full"/>
            </div>
          <div className='space-y-3'>
              <h1 className='text-5xl'>Jada Ganim</h1>
              <h2 className='text-sm'>Currently Studying Film, Television and Media Studies in Los Angeles, CA.</h2>
              <div className='flex items-center space-x-4 justify-center p-2'>
                <motion.a whileHover={{scale: 1.2}} className="w-8" href="https://instagram.com/jadaganim">
                <img src={insta} />
                </motion.a>
                <motion.a whileHover={{scale: 1.2}} className="w-8" href="https://www.linkedin.com/in/jada-ganim/">
                <img src={linkedin} />
                </motion.a>
                <motion.a whileHover={{scale: 1.2}} className="w-8" href="https://www.youtube.com/channel/UCwjWRIlTnAnvnU1R6on0Ovg">
                <img src={yt} />
                </motion.a>
              </div>
            </div>
        </div>
        </div>
      </div>
    )
}
