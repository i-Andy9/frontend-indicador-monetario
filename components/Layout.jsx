import React from 'react'
import Head from 'next/head'
import SideBar from './SideBar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>CRM - Bolsa de valores</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className='bg-gray-400 min-h-screen'>
        <div className="flex min-h-screen">
          <SideBar />

          <main className='bg-gray-100 sm:w-3/4 xl:w-5/6 sm:min-h-screen p-5'>
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout