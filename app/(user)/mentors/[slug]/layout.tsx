import React from 'react'

const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-4 px-4 pb-4">
          <div className="min-h-screen space-y-6 w-full">
              {children}
          </div>
          </div>
  )
}

export default Layout