import React, { useEffect, useRef } from "react"
import Contacts from "../Contacts"
import { useSelector } from "react-redux"
import IsloggedinHOC from '../../Components/IsLoggedinHOC'
import IsLoadingHOC from '../../Components/IsLoadingHOC'
import profileImg from "../../assets/img/Ellipse 22.png"
import listImg from "../../assets/img/Ellipse-1.png";

const Dashboard = (props) => {
    const { setLoading } = props
    const { qr_code, user } = useSelector(state => state.auth)
    return (
        <>
            <div className="col-xl-6 col-lg-9 space-main p-0">
                <div className="card-body p-0 active-sec">
                    <h5 className="card-title">Account status:  <span>Active</span></h5>
                </div>
                <div className="card-header p-0 border-0 bg-white top-sec">
                    <div className="d-flex justify-content-between align-items-center qr-sec">
                        <div className="col-lg-8 d-flex gapfor_pro_q profile-sec" >
                            <div className="profile_logo">
                                <div className="profile--logo--img">
                                    <img src={`${process.env.REACT_APP_IMAGE_PATH}profile_image/${user.profile_picture}`} alt="Profile Image" />
                                </div>


                            </div>
                            <div className="">
                                <h3>{user.username}</h3>
                                <p><span><b> {user.enigmaId}</b></span></p>
                                {/* <p><span>Johndoe#</span> <b>123457890 </b></p>  */}
                                <a href="#" className="btn btn-primary">EDIT ACCOUNT PROFILE</a>
                            </div>
                        </div>
                        <div className="col-lg-4 qr-code-sec">
                            <img src={qr_code} alt="" className="img-rounded" />
                        </div>
                    </div>
                </div>
                <div className="card gedf-card mt-4 border-0">
                    <div className="card-header border-0 bg-white pb-0 pt-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="ml-2">
                                    <div className="recent-head h5 m-0">Recent Activities</div>
                                </div>
                            </div>
                            <div>
                                {/* <div className="dropdown">
                                    <div className="ml-2">
                                        <div className="p m-0 font-16 grey-color"><i className="fa fa-calendar-o pr-2" aria-hidden="true"></i>01 September - Today<i className="fa fa-angle-down pl-2" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="coming--soon--text p-4 text-center">
                        <h1>Coming Soon!</h1>
                    </div>

                </div>
            </div>
            <Contacts />
        </>
    )
}
export default IsLoadingHOC(IsloggedinHOC(Dashboard))