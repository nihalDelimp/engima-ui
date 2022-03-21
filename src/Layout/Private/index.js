import Sidebar from "./Sidebar"


const PrivateLayout = ({ children }) => {
    return (
        <div className="container gedf-wrapper" >
            <div className="row justify-content-center sticky-menu-end" >
            <Sidebar />
            <div >
                {children}
            </div>
        </div>
        </div>
    )
}

export default PrivateLayout;
