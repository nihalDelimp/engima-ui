
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LogOut } from '../../../Redux/action/Auth'
import imgfram1 from '../../../assets/img/Frame 817.png'
import imgfram2 from '../../../assets/img/Frame 824.png'

const Sidebar = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.auth.user.name);

    const logout = () => {
        dispatch(LogOut())

    }

    return (
        <>
            <div className="col-lg-3 sticy-menu card-group">
                <div className="card border-0">

                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <a className="navbar-brand p-0" href="#"><img src= {imgfram1} alt="" className="img-fluid" /></a>
                        <button className="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon m-0"></span>
                        </button>

                    </nav>
                    <ul className="list-group list-group-flush right-menu collapse" id="navbarSupportedContent" >
                        <li className="list-group-item border-0"><a className="dropdown-item font-16 p-0" href="#">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.386 0.210206C9.56154 0.0736511 9.7776 -0.000488281 10 -0.000488281C10.2224 -0.000488281 10.4385 0.0736511 10.614 0.210206L18.842 6.61021C19.2028 6.8909 19.4948 7.25035 19.6955 7.66111C19.8962 8.07186 20.0003 8.52304 20 8.98021V18.0002C20 18.5306 19.7893 19.0393 19.4142 19.4144C19.0391 19.7895 18.5304 20.0002 18 20.0002H14C13.4696 20.0002 12.9609 19.7895 12.5858 19.4144C12.2107 19.0393 12 18.5306 12 18.0002V12.0002H8V18.0002C8 18.5306 7.78929 19.0393 7.41421 19.4144C7.03914 19.7895 6.53043 20.0002 6 20.0002H2C1.46957 20.0002 0.960859 19.7895 0.585786 19.4144C0.210714 19.0393 0 18.5306 0 18.0002V8.98021C0 8.05221 0.428 7.18021 1.16 6.61021L9.386 0.210206ZM10 2.26621L2.386 8.18821C2.26545 8.28198 2.16799 8.40212 2.10108 8.5394C2.03416 8.67669 1.99959 8.82748 2 8.98021V18.0002H6V12.0002C6 11.4698 6.21071 10.9611 6.58579 10.586C6.96086 10.2109 7.46957 10.0002 8 10.0002H12C12.5304 10.0002 13.0391 10.2109 13.4142 10.586C13.7893 10.9611 14 11.4698 14 12.0002V18.0002H18V8.98021C18.0004 8.82748 17.9658 8.67669 17.8989 8.5394C17.832 8.40212 17.7345 8.28198 17.614 8.18821L10 2.26821V2.26621Z" fill="#131313"></path>
                            </svg>
                            <span>Dashboard</span></a></li>
                        <li className="list-group-item border-0"><a className="dropdown-item font-16 p-0" href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 12.5C2 6.7103 6.7103 2 12.5 2C18.2897 2 23 6.7103 23 12.5C23 18.2897 18.2897 23 12.5 23C6.7103 23 2 18.2897 2 12.5ZM4.1 12.5C4.1 17.1315 7.86845 20.9 12.5 20.9C17.1315 20.9 20.9 17.1315 20.9 12.5C20.9 7.86845 17.1315 4.1 12.5 4.1C7.86845 4.1 4.1 7.86845 4.1 12.5ZM9.58067 7.41132C10.355 6.63697 11.4049 6.20132 12.5 6.19994C13.5951 6.20105 14.645 6.63664 15.4192 7.41108C16.1935 8.18553 16.6288 9.23554 16.6296 10.3306C16.6296 12.0064 15.3948 13.0067 14.5768 13.6692L14.5737 13.6717C14.5593 13.6833 14.545 13.6949 14.5306 13.7065C14.3403 13.8597 14.1585 14.0062 14.012 14.1526C13.5836 14.58 13.55 14.9685 13.5489 14.9853L13.55 15.6499H11.45V14.9496C11.45 14.8257 11.4804 13.7137 12.5283 12.6669C12.7596 12.4453 13.0018 12.2354 13.2539 12.0379C14.0256 11.4142 14.5307 10.9585 14.5307 10.3306C14.5307 9.21029 13.6193 8.29994 12.5 8.29994C11.3807 8.29994 10.4693 9.21029 10.4693 10.3306H8.36928C8.37067 9.23553 8.80631 8.18568 9.58067 7.41132ZM13.55 16.6999H11.45V18.7999H13.55V16.6999Z" fill="#131313"></path>
                        </svg>  <span>Help </span></a></li>
                        <li className="list-group-item border-0"><a className="dropdown-item font-16 p-0" href="#">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 4.8V6.7M10.5 20C15.7468 20 20 15.7468 20 10.5C20 5.25315 15.7468 1 10.5 1C5.25315 1 1 5.25315 1 10.5C1 15.7468 5.25315 20 10.5 20ZM10.5 8.6V16.2V8.6Z" stroke="#131313" strokeWidth="2"></path>
                            </svg>
                            <span>About </span></a></li>
                        <li className="list-group-item border-0"><a className="dropdown-item font-16 p-0"
                         onClick={logout}
                         >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.6667 20H7.16671C5.87804 20 4.83337 18.9553 4.83337 17.6666V13.5H7.16671V17.6666H17.6667V2.33333H7.16671V6.49996H4.83337V2.33333C4.83337 1.04467 5.87804 0 7.16671 0H17.6667C18.9554 0 20 1.04467 20 2.33333V17.6666C20 18.9553 18.9554 20 17.6667 20ZM9.50004 14.6666V11.1666H0V8.83329H9.50004V5.33329L15.3334 9.99996L9.50004 14.6666Z" fill="#131313"></path>
                            </svg>
                            <span>Sign Out </span>
                            </a>
                            </li>
                    </ul>
                    <div className="nav-img-btm" style = {{marginTop : "auto"}}>
                        <img src= {imgfram2} className="img-fluid" alt="Logo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar