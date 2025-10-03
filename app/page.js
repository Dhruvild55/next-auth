"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function HomePage() {
  const { data: session } = useSession()

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-lg">
        {session ? (
          <div className="flex flex-col items-center space-y-4">
            <img
              src={session.user?.image}
              alt="profile"
              className="w-16 h-16 rounded-full shadow-md"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              Welcome, {session.user?.name || "User"} 👋
            </h2>
            <p className="text-gray-500">{session.user?.email}</p>
            <button
              onClick={() => signOut()}
              className="w-full px-4 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Welcome</h2>
            <p className="text-gray-500 text-center">
              Sign in to access your account
            </p>
            <button
              onClick={() => signIn("github")}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-black transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.7.5.5 5.7.5 12a11.5 11.5 0 008 11c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.4-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.3 11.3 0 016 0C17 6.2 18 6.5 18 6.5c.6 1.7.2 3 .1 3.3.7.9 1.2 2 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.7.9.7 1.8v2.6c0 .3.2.7.8.6a11.5 11.5 0 008-11c0-6.3-5.2-11.5-11.5-11.5z" />
              </svg>
              Sign in with GitHub
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
