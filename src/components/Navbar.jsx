import React from 'react'

function Navbar({setCategory}) {
  // business entertainment general health science sports technology
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>News Site</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
         <button className='nav-link' aria-current="page" onClick={setCategory("business")}>Business</button>
        </li>
        <li className="nav-item">
         <button className='nav-link' aria-current="page" onClick={setCategory("entertainment")}>Entertainment</button>
        </li>
        <li className="nav-item">
         <button className='nav-link' aria-current="page" onClick={setCategory("health")}>Health</button>
        </li>
        <li className="nav-item">
         <button className='nav-link' aria-current="page" onClick={setCategory("science")}>Sciences</button>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar