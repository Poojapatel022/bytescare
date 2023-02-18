import Link from 'next/link';
import Image from 'next/image';
import styles from '../Header/header.module.css'
import style from '../../components/Header/header.module.css';

const Header = () => {
  return (
    <header>
      <nav className="header navbar navbar-expand-lg pt-3 pb-4" style={{ backgroundColor: '#FFFFFF',  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)' }}>
        <div className="container-fluid" >

          <Link className={styles.logo} href="#" >
            <Image src="/bytescarelogo.svg" alt="Bytescare" width="213" height="30" />
          </Link>

          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto gap-4">
              {/* className="navbar-nav mx-auto me-6 mb-2 mb-lg-0 gap-5"> */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Product & Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Product</a></li>
                  <li><a className="dropdown-item" href="#">services</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">FAQ's</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Contact</a>
              </li>
              <li className='mt-2'>
                <a className="text-warning text-decoration-none" href="#">Login</a>
              </li>
              <li>
                <button className="btn btn-warning text-white" type="button" id="button-addon2">Request Demo</button>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
