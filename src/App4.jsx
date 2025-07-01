function MyComp1(){
    return <h1>hello react</h1>
}
// 가장 상위요소가 하나인 것만 그려야 함
function MyComp2() {
    return <h2>hello compoment</h2>;

}

function MyComp3() {
    return <h1><span>안녕</span>
    <span>컴포넌트</span>
    <button>
        <span>버튼 문구</span>
    </button></h1>;
}

function MyComp4() {
    return <div></div>;
}

function MyComp5() {
    //fragement
    return(
        <>
        <div>hello</div>
        <div>comp5</div>
        </>
    )
}

function MyComp6() {
    return (
        <>
        <div>
            <h1>제목</h1>
            <p>Lorem ipsum dolor.</p>
        </div>
        </>
    );
}

function MyComp7() {
    return (
        <>
            <div>
                <h2>두번째 제목</h2>
                <p>Lorem ipsum dolor.</p>
            </div>
        </>
    );
}

function App4() {
    return <>
        <MyComp1/>
        <MyComp2/>
        <MyComp3/>
        <MyComp4/>
        <MyComp5/>
        <MyComp6/>
        <MyComp7/>
    </>
}


export default App4;