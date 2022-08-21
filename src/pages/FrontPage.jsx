import headshot from '../assets/profile/new.png'
import insta from '../assets/logos/insta.png'
import linkedin from '../assets/logos/linkedin.png'
import yt from '../assets/logos/yt.png'

export default function FrontPage() {
    return (
      <div className='grid place-items-center shadow-inner'>
        <div className='lg:flex items-center text-center lg:space-x-12 p-10'>
            <div>
              <img src={headshot} className="lg:max-w-md	bg-purple-500 rounded-full"/>
            </div>
          <div className=''>
              <h1 className='text-5xl'>Jada Ganim</h1>
              <h2 className='text-sm'>Currently Studying Film, Television and Media Studies in Los Angeles, CA.</h2>
              <div className='flex items-center space-x-2 justify-center p-2'>
                <a className="w-8" href="https://instagram.com/jadaganim">
                <img src={insta} />
                </a>
                <a className="w-8" href="https://www.linkedin.com/in/jada-ganim/">
                <img src={linkedin} />
                </a>
                <a className="w-8" href="https://www.youtube.com/channel/UCwjWRIlTnAnvnU1R6on0Ovg">
                <img src={yt} />
                </a>
              </div>
            </div>
        </div>
      </div>
    )
}
