import React from "react";
import contImg from "../../assets/img/Ellipse.png"
import contImg2 from "../../assets/img/Ellipse (1).png"
import contImg3 from "../../assets/img/Ellipse4.png"
import contImg4 from "../../assets/img/Ellipse (2).png"

const Contacts = () => {
    return (
        <div className="col-xl-3 col-lg-9 card-group space-right space-left p-0">
            <div className="card gedf-card">
                <div className="card-body left-menu">
                    <h5 className="card-title cont-hed text-muted">5 Contacts</h5>

                    <div className="d-flex justify-content-between align-items-center contact-padding">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="mr-2">
                                <img className="rounded-circle" width="45" src={contImg} alt="" />
                            </div>
                            <div className="ml-2">
                                <div className="h7 font-16">Rebecca Davis</div>
                            </div>
                        </div>

                    </div>
                    <div className="d-flex justify-content-between align-items-center contact-padding">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="mr-2">
                                <img className="rounded-circle" width="45" src={contImg4} alt="" />
                            </div>
                            <div className="ml-2">
                                <div className="h7 font-16">Sarah Smyth</div>
                            </div>
                        </div>


                    </div>
                    <div className="d-flex justify-content-between align-items-center contact-padding">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="mr-2">
                                <img className="rounded-circle" width="45" src={contImg2} alt="" />
                            </div>
                            <div className="ml-2">
                                <div className="h7 font-16">Dayton Gueverra</div>
                            </div>
                        </div>


                    </div>

                    <div className="d-flex justify-content-between align-items-center contact-padding">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="mr-2">
                                <img className="rounded-circle" width="45" src={contImg3} alt="" />
                            </div>
                            <div className="ml-2">
                                <div className="h7 font-16">Danny</div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center contact-padding">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="mr-2">
                                <img className="rounded-circle" width="45" src={contImg} alt="" />
                            </div>
                            <div className="ml-2">
                                <div className="h7 font-16">Jacob</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contacts