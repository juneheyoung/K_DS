import axios from 'axios';
import Toast from '../components/Toast'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useCallback, useState, useEffect } from "react";
import '../style/LoginPage.css';
import '../style/UpdateMemberPage.css';




function UpdateMemberPage() {
    const [username, setUsername] = useState('');
    const [profileUrl, setProfileUrl] = useState('');
    const [originProfileUrl, setOriginProfileUrl] = useState('');
    const [nickname, setNickname] = useState('');
    const [originNickname, setOriginNickname] = useState('');
    const [nicknameDuplicateCheck, setNicknameDuplicateCheck] = useState(false);
    const [validNickname, setValidNickname] = useState(false);
    const [uploadFile, setUploadFile] = useState('');

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + "/api/member")
            .then((res) => {
                if (res.status === 200) {
                    setOriginNickname(res.data.nickname);
                    setOriginProfileUrl(res.data.profile_url);
                    setUsername(res.data.username);
                    setProfileUrl(res.data.profile_url);
                }
                else {
                    Toast.fire("회원 정보를 불러올 수 없습니다.", "", "error");
                }
            })
            .catch((res) => {
                // console.log(res);
                Toast.fire("회원 정보를 불러올 수 없습니다.", "", "error");
            })
    }, [])

    useEffect(() => {
        setValidNickname(nickname.length <= 30)
        if (nickname.length === 0) {
            setNicknameDuplicateCheck(true);
        }
        else setNicknameDuplicateCheck(false);
    }, [nickname])

    const handleNicknameDuplicateCheck = useCallback((e) => {
        e.preventDefault();
        // console.log('Nickname-Duplication-Check')

        if (!validNickname) {
            Toast.fire("닉네임은 1자 이상 30자 이하여야 합니다.", "", "warning");
            return;
        }

        let body = {
            username: username,
            nickname: nickname ? nickname : originNickname,
            profileUrl: profileUrl === originProfileUrl ? profileUrl : "null"
        };

        axios.post(process.env.REACT_APP_BASE_URL + '/api/member/modify/nickname', body, {
            headers: {
                "Content-Type": `application/json; charset= UTF-8`
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    // console.log('duplication checked')
                    Toast.fire("사용 가능한 닉네임입니다.", "", "");
                    setNicknameDuplicateCheck(true);
                }
            })
            .catch((res) => {
                // console.log(res);
                res = res.response;
                if (res.status === 460) Toast.fire("잘못된 닉네임 형식입니다.", "", "warning");
                else if (res.status === 457) Toast.fire("이미 사용 중인 이메일입니다.", "", "warning")
                else Toast.fire("이유를 알 수 없는 오류", "", "error")
            })

    }, [nickname, originNickname]);


    const onSubmit = (e) => {
        e.preventDefault();
        if (!nicknameDuplicateCheck) {
            Toast.fire("중복 확인을 진행해주세요", "", "warning")
        }
        else if (uploadFile && uploadFile.size.toString().length >= 7) {
            Toast.fire("파일의 크기가 너무 큽니다. 1MB 이하의 프로필 사진을 올려주세요.", "", "warning")
        }
        else {
            const formData = new FormData();
            formData.append("file", uploadFile);

            let body = {
                username: username,
                nickname: nickname ? nickname : originNickname,
                profileUrl: profileUrl === originProfileUrl ? profileUrl : "null"
            };

            formData.append(
                "dto",
                new Blob([JSON.stringify(body)], { type: "application/json" })
            );

            axios.put(process.env.REACT_APP_BASE_URL + '/api/member/modify', formData)
                .then((res) => {
                    if (res.status === 200) {
                        Toast.fire("회원 정보를 수정했습니다.", "", "success")
                    }
                })
                .catch((res) => {
                    if (res.status === 463) {
                        Toast.fire("파일의 크기가 너무 큽니다. 1MB 이하의 프로필 사진을 올려주세요.", "", "warning")
                    }
                    else {
                        Toast.fire("회원정보를 수정할 수 없습니다.", "", "error")
                    }
                });
        }
    }

    const onProfileChange = (e) => {
        e.preventDefault();
        if (!e.target.files || !e.target.files[0]) return;
        const file = e.target.files[0];
        setUploadFile(file);
        const reader = new FileReader();
        reader.onload = () => {
            setProfileUrl(reader.result);
        }
        reader.readAsDataURL(file);
    }


    return (
        <>
            <div class="site-wrap">
                <nav class="site-nav">
                    <div class="name">
                        K - DS
                    </div>
                    <ul>
                        <li class="active"><a href="main">게시판</a>
                        </li>
                        <li><a href="update">회원정보수정</a></li>
                        <li><a href="profile">내정보</a></li>
                    </ul>
                </nav>
                <main>

                    <header>
                        <h1 class="title">회원정보수정</h1>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
                            <form className="member-info-form" style={{ width: '50%' }} onSubmit={onSubmit}>
                                {/* 내 아이디(이메일) */}
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Ghost.png" alt="Ghost" />
                                </div>
                                <div className="formGroup">

                                    <label htmlFor="formNickname" className="member-info-label"> 아이디 </label>
                                    <div className="formGroupComponent">
                                        <input className='formInput' type="id" id="myEmail" placeholder={username} />
                                        <button className='duplicationCheckButton' onClick={handleNicknameDuplicateCheck}>중복 확인</button>
                                    </div>
                                </div>
                                {/* 비밀번호 수정*/}
                                <div className="formGroup">
                                    <label htmlFor="formNickname" className="member-info-label"> 비밀번호 </label>

                                    <input className='formInput' onChange={e => { setNickname(e.target.value) }} type="text" id='formNickname' placeholder={originNickname} />


                                    {!validNickname && nickname.length >= 1 && (
                                        <div className="errorMsg">닉네임은 30자 이내로 작성해주세요.</div>
                                    )}
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button className="submitButton" type="submit">
                                        수정하기
                                    </button>
                                </div>
                            </form>
                        </div>
                    </header>
                </main>

            </div >
        </>
    )
}
export default UpdateMemberPage;