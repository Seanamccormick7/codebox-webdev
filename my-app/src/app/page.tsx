export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          🚀 Next.js Project
        </h1>

        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Built with Next.js and TailwindCSS, with Codebox!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Example 1
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built with Next.js
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Example 2
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Designed with Tailwind
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Example 3
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Made with Codebox
            </p>
          </div>
        </div>

        <div className="flex gap-4 justify-center mt-12 flex-wrap">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors font-semibold">
            Get Started
          </button>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg shadow-md hover:bg-gray-50 transition-colors font-semibold border-2 border-blue-600">
            Learn More
          </button>
        </div>
      </div>

      <footer className="mt-16 text-center text-gray-600 dark:text-gray-400">
        <p className="text-sm">Made by Sean McCormick</p>
      </footer>
    </main>
  );
}
