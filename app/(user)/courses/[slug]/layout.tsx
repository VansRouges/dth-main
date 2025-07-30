import React from 'react'

const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
      <div className="flex flex-col lg:flex-row w-full gap-4 px-4 pb-4">
          {children}
    </div>

  )
}

export default Layout