import React from 'react'
import { CodeXml , BugPlay } from 'lucide-react';

// This function returns a Navbar component
const Navbar = () => {
  // Return a JSX element
  return (
    <>
      <div className="nav flex items-center justify-between h-[90px] bg-zinc-900" style={{padding:"0px 150px"}}>
        <div className="logo flex items-center gap-[10px]">
          <CodeXml  size={30} color='#ea33b9ff'/>
          <span className="text-2xl font- sans-serif text-white ml-2">Codemate</span>
        </div>
              <div className="icons flex items-center gap-[20px]">
                   <i className='cursor-pointer transition-all hover:text-[]'><BugPlay/></i>
          
        </div>
      </div>
    </>
  )
}

export default Navbar