import './navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        Nish_Admin
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://avatars.githubusercontent.com/u/75436573?v=4" alt="" />
          <span>Nish</span>
        </div>
        <img src="/setting.svg" alt="" />
      </div>
    </div>
  )
}

export default Navbar