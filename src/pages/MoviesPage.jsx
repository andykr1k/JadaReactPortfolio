

export default function MoviesPage() {
    return (
    <div className="grid place-items-center">
        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <div class="grid place-items-center">
            <div class="p-4 rounded-lg shadow-lg lg:p-12 lg:col-span-3 space-y-2">
                <h1 className="text-3xl items-center text-center">Film Spotlight</h1>
                <iframe width="720" height="405" src="https://www.youtube.com/embed/wolixDx71ws" class="imagefit"></iframe>
                <h2 className="text-xl items-center text-center">Name</h2>
                <h3 className="text-lg items-center text-center">Description</h3>
            </div>
          </div>
        </div>
      </div>
    )
}
