import { useEffect, useState } from "react";

function ProfileCard() {
    const [profile, setProfile] = useState({});    

    useEffect(() => {
        console.log("setting profile")
        setProfile({
            name: "Rajeev Goyal",
            description: "From Jodhpur, Rajasthan",
            interests: ["Badminton", "Computer Games"],
            handles: 
                {
                    twitter: "https://twitter.com/POTUS",
                    instagram: "https://www.instagram.com/joebiden/?hl=en"
                }
        })
    },[]);

    console.log(profile)

    return (
        <div>
        {profile.name && ( // Check if name is defined
            <>
                <h1>{profile.name}</h1>
                <h3>{profile.description}</h3>
                <h2>Interests</h2>
                <ul>
                    {profile.interests && profile.interests.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
                {profile.handles && Object.keys(profile.handles).map((key, index) => (
                    <a key={index} href={profile.handles[key]}>
                        <button>{key}</button>
                    </a>
                ))}
            </>
        )}
    </div>
    )
}

export default ProfileCard