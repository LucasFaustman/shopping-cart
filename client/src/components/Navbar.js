import { useSelector } from "react-redux"
import { useState } from "react"

export default function Navbar() {
    const cart = useSelector((state) => state.cart)

    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
          total += item.quantity
        })
        return total
      }

      const [isNavCollapsed, setIsNavCollapsed] = useState(true);

      const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

    return (
<nav className="navbar navbarCustom navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm mb-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><i className="fa-solid fa-plane-departure me-2"></i> <strong>Travel Buddi</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded={!isNavCollapsed ? true : false} onClick={handleNavCollapse} aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto d-flex align-items-center">
        <li className="nav-item">
            <a className="nav-link mx-2 active" href="/shop">Shop</a>
        </li>
        <li className="nav-item">
          <a href="/cart">
            <i className="fa">&#xf07a;</i>
             <span className='badge badge-warning' id='lblCartCount'> {getTotalQuantity() || 0} </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}
