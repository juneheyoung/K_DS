import { useEffect, useState } from "react";
import '../style/LoginPage.css';
import '../style/UpdateMemberPage.css';
import { useSelector } from "react-redux";


function ProfilePage() {
    const user = useSelector((state) => state.user);

    // const [userName, setUserName] = useState({ username: '호진장', writeId: [1, 2, 3], likeId: [1, 3, 4] });



    return (
        <>
            <main>
                <header>
                    <div>
                        <h1>{user.userName}님의 프로필</h1>
                        <h2>작성한 글</h2>
                        <h2>좋아요 글</h2>
                    </div>
                </header>
            </main>
        </>
    )
}

export default ProfilePage;