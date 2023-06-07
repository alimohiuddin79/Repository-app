// change metadata in layout will effect all his child in this case it's also change team page title to "About"
export const metadata = {
    title: 'About',
}

const AboutLayout = ({ children }) => {
  return (
    <div>
        {/* if you need to specific page layout just layout.js or jsx on that page folder note all child routes also contain parent layout in this case about layout effect on team page */}
        <h1>About Layout</h1>
        {children}
    </div>
  )
}

export default AboutLayout