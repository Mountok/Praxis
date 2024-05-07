import React, { useEffect, useState } from 'react'
import "./profile.css"
import { Helmet } from 'react-helmet'
import axios from "axios"

const Profile = ({port}) => {
    const [progress, setProgress] = useState(10)
    const [localStoreUserId, setLocalStoreUserId] = useState(localStorage.getItem("LEARN_GGKIT_USER_ID"))
    const [userProfile, setUserProfile] = useState([])
    useEffect(() => {

        GetProfile()
    }, [])

    const GetProfile = async () => {
        await axios.get(`/api/profile/${localStoreUserId}`)
            .then(function (response) {
                // Обработка успешного ответа
                console.log(response.data.data);
                setUserProfile(response.data.data)
            })
            .catch(function (error) {
                // Обработка ошибки
                console.log(error);
            });
    }
    return (

        <main className="main profile">

            <Helmet>
                <title>Профиль</title>
                <meta name="theme-color" content="#e9c23bff" />
                {/* <meta name="theme-color" content="#000000" /> */}
            </Helmet>
            {userProfile.map(el => (
                <>
                    <div className="profile_header">
                        <img className='profile_header_bg' src="images/profile_bg.png" alt="" />
                        <div
                        style={{
                            background: `url(http://${port}/images?id=${el.image}) no-repeat`,
                            backgroundSize: "cover"
                        }}
                        className="profile_header_avatar">
                            
                        </div>
                        <h2>{el.full_name}</h2>
                        <p>{el.description}</p>
                    </div>
                    <div className="profile_body">
                        <div onClick={() => setProgress(progress + 5)} className="profile_stats level">
                            <div>
                                <p>Уровень {el.score}</p>
                                <p>{progress}%</p>
                            </div>
                            <div className="level_range">
                                <span style={{ width: `${progress}%` }} className='level_range_item'></span>
                            </div>
                        </div>
                    </div>

                </>
            ))}

        </main>
    )
}

export default Profile