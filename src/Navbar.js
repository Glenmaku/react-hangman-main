export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="wrapper">
          <a href="https://github.com/Glenmaku/react-hangman-main">
            <h2>HangMan</h2>
            <p>&copy; Glen Mark Dela Cruz {new Date().getFullYear()}</p>
          </a>
        </div>
      </div>
    </nav>
  )
}