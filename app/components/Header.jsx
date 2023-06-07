import Link from "next/link"

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="logo">
                <Link href="/">Traversy Media</Link>
            </div>
            <div className="links">
                <Link href="/about">About</Link>
                <Link href="/about/team">Our Team</Link>
                <Link href="/code/repos">Code</Link>
            </div>
        </div>
    </header>
  )
}

export default Header

// Advantages of RSC:

// - Load faster - Don't have to wait for the Javascript to load
// - Smaller client bundle size
// - SEO friendly
// - Access to resources the client can't accesss
// - Hide sensitive data from the client
// - More secure against XSS attacks
// - Improved developer experience

// Just like with anything else, there are also disadvantages:

// - Not as interactive
// - No component state. We can not use the `useState` hook.
// - No component lifecycle methods. We can not use the `useEffect` hook.
// SOLUTION: on the top of file type
// 'use client'; 
//  import { useState, useEffect } from "react"
// this code make your component client side component