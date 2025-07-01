// 처음 만드는 component
// component : 함수
// component명(함수명) : UpperCamelCase
function MyAwesomeButton() {
    // js 주석

    // 함수코드 들
    // return 에 : dom에 그려야할 코드 작성
    return (
        <button
            style={{
                backgroundColor: "red",
                color: "yellow",
                padding: "15px",
                border: "2px solid yellow",
            }}
        >
            너무 잘 만든 버튼
        </button>
    );
}
function MyNewHeader() {
    return (
        <h1>
            뉴헤더입니다
        </h1>
    )
}



// MyNewHeader 컴포넌트 만들기

function App3() {
    return (
        <>
            {/*h1>lorem3^p>lorem^button*2>lorem1*/}
            <h1>Lorem ipsum dolor.</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
                inventore quas quasi quidem quod sit? Deleniti dolor doloribus ex,
                facere maiores molestiae molestias nobis possimus quae recusandae soluta
                voluptatum?
            </p>
            <button>Lorem.</button>
            <button>Libero!</button>
            <hr />
            <button
                style={{
                    backgroundColor: "green",
                    color: "white",
                    border: "1px solid yellow",
                    padding: "10px",
                }}
            >
                너무 잘 만든 버튼
            </button>
            <button
                style={{
                    backgroundColor: "green",
                    color: "white",
                    border: "1px solid yellow",
                    padding: "10px",
                }}
            >
                너무 잘 만든 버튼
            </button>
            <MyAwesomeButton />
            <MyNewHeader />
        </>
    );
}

export default App3;