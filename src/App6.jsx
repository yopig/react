function MyComp1(param) {
    console.log(param);
    console.log(param.color);
    const color = param.color;

    console.log("컬러변수", color);
    return null;
}

function MyComp2(param) {
    // const address = param.address;
    const { address } = param;
    console.log("주소", address);
    return null;
}

// {address: "뉴욕"}를 분해 할당
function MyComp3({ address }) {
    console.log("주소3", address);
    return null;
}

function MyComp4({ city }) {
    console.log("도시", city);
    return null;
}

function MyComp5({ city, country, address = "기본 주소" }) {
    console.log("도시5", city);
    console.log("나라5", country);
    console.log("주소5", address);
    return null;
}

function App6( score, className, location) {
    console.log("성적", score);
    console.log("반이름", className);
    console.log("지역", location);
    return (
        <>
            <MyComp1 color="yellow" />
            {/*  MyComp1({color:"yellow"}) */}
            <MyComp1 color="red" />
            <MyComp2 address="seoul" />
            <MyComp2 address="jeju" />
            {/*  MyComp2({address: "seoul" })*/}
            <MyComp3 address="뉴욕" />
            <MyComp3 address="시카고" />
            <MyComp4 city="서울" />
            <MyComp4 city="워싱턴" />
            {/*  MyComp4 함수 작성 w/ 분해 할당으로 props 받기 -> 로그 출력*/}
            <MyComp5 city="인천" country="한국" address="강남" />
            <MyComp5 city="텍사스" country="미국" address="라스베가스" />
            <MyComp5 city="오사카" country="일본" />
            {/*  연습 : MyComp6 이 받은 props 들 출력
            location의 기본값은 "기본위치"
      */}
            <MyComp6 score="A" className="중앙" location="신촌" />
            <MyComp6 score="B" className="센터" location="강남" />
            <MyComp6 score="C" className="기린" />
        </>
    );
}

export default App6;