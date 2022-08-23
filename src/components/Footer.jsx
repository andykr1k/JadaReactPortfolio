import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import insta from '../assets/logos/insta.png'
import linkedin from '../assets/logos/linkedin.png'
import yt from '../assets/logos/yt.png'

export default function Footer() {
    return (
      <footer class="text-center">
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto space-y-4">

          <p class="text-xs font-medium">
            <div className="text-gray">
              <FontAwesomeIcon icon={faCode} className="ml-2 mr-2" />
              with 
              <FontAwesomeIcon icon={faHeart} className="ml-2 mr-2" />
              by
              {" "}
              <a
                  href="https://rebrand.ly/andykr1k"
                  aria-label="My Portfolio"
              > 
                  <span className="badge bg-dark">
                      Andrew Krikorian
                  </span>
              </a>{" "}
              using
              <FontAwesomeIcon icon={faReact} className="ml-2 mr-2" />
            </div>
          </p>
        </div>
      </div>
    </footer>
    )
}
