import { useEffect, useState } from "react";

function ProfilePage() {
    const [userName, setUserName] = useState({ username: '호진장', writeId: [1, 2, 3], likeId: [1, 3, 4] });



    return (
        <>
            <div>
                <h1>{userName.username}님의 프로필</h1>
                <h2>작성한 글</h2>

                <h2>좋아요 글</h2>


            </div>
        </>
    )
}

export default ProfilePage;