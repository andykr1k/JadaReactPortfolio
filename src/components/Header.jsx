import logo from "../assets/logos/tabicon.png"

export default function Header() {
    return (
        <div class="shadow-sm">
          <div class="max-w-screen-xl p-4 mx-auto">
            <div class="flex items-center justify-between space-x-4 lg:space-x-10">
              <div class="flex lg:w-0 lg:flex-1">
                <img src={logo} class="w-8 h-8 bg-purple-900 rounded-lg p-2"/>
              </div>

              <nav class="hidden space-x-8 text-sm font-medium md:flex">
                <a class="text-gray-500" href="">About</a>
                <a class="text-gray-500" href="">Blog</a>
                <a class="text-gray-500" href="">Projects</a>
                <a class="text-gray-500" href="">Contact</a>
              </nav>

              <div class="md:hidden">
                <button class="p-2 text-gray-600 rounded-lg" type="button">
                  <span class="sr-only">Open menu</span>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}
