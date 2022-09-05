import React, { useEffect, useState } from "react";
import contImg from "../../assets/img/Ellipse.png"
import contImg2 from "../../assets/img/Ellipse-1.png"
import contImg3 from "../../assets/img/Ellipse4.png"
import contImg4 from "../../assets/img/Ellipse (2).png"
import axios from "axios";
import { useSelector } from "react-redux";
import { LogOut } from '../../Redux/action/Auth'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
const Contacts = () => {
    const { qr_code, user, token } = useSelector(state => state.auth)
    const [contacts, setContacts] = useState([]);
    const history = useHistory();
    const Live_URL = process.env.REACT_APP_BASEURL
    // const Live_URL = "http://localhost:8080"
    useEffect(async () => {

        await fetch(Live_URL + "/friend/get-friends-list",
            {
                method: 'GET',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": token,
                })
            }).then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson, "nihallllll")
                setContacts(responseJson.data)
            })
            .catch(err => console.log(err.message))
    }, []);

    const routeChange = async (id, name) => {
        const other_id = []
        other_id.push({ id, name })
        console.log(other_id, "Nihal")
        await fetch(Live_URL + "/friend/click-on-friend",
            {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": token,
                }),
                body: JSON.stringify({
                    other_id,
                })
            }).then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson, "Click on friends")
                history.push({
                    pathname: '/chats',
                    state: { "detail": responseJson, "other_user_id": id }
                });
            })
            .catch(err => console.log(err.message))
    }

    // console.log(contacts, "naikkks")
    return (
        <div className="col-xl-3 col-lg-9 card-group space-right space-left p-0">
            <div className="card gedf-card">
                <div className="card-body left-menu">
                    <h5 className="card-title cont-hed text-muted">Contacts</h5>
                    {contacts.map((item, key) => (

                        <div className="d-flex justify-content-between align-items-center contact-padding" onClick={() => routeChange(item.user[0]._id, item.user[0].username)} key={key}>
                            {/* <div className="d-flex justify-content-between align-items-center contact-padding" key={key}> */}
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mr-2">
                                    <img className="contact-circle" width="50" src={'https://d3nha4rqhtm0ac.cloudfront.net/profile_image/' + item.user[0].profile_picture} alt="" />
                                </div>

                                <div className="ml-2" key={key}>
                                    <div className="h7 font-16">{item.user[0].username}</div>
                                    {/* <div className="h7 font-16">{item.isActive === false ? "OFFLINE" : "ONLINE"}</div> */}
                                </div>


                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </div >
    )
}
export default Contacts