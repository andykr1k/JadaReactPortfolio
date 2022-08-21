

export default function Header() {
    return (
      <div class="flex items-center justify-center space-x-6 p-2">
        <nav
          class="flex flex-wrap justify-center gap-8 p-8 text-sm font-bold border-4 border-black rounded-xl"
        >
          <a
            class="hover:opacity-75"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>

          <a
            class="hover:opacity-75"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Uses
          </a>

          <a
            class="hover:opacity-75"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>

          <a
            class="hover:opacity-75"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </nav>
      </div>
    )
}
