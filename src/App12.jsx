function MyAwesomeButton({color, children}) {
    return <button style={{
        color: color,
    background: "red",
    padding: "10px",
    borderRadius: "10px"}}>{children}</button>;

}

function App12() {
    return (
        <>
            <MyAwesomeButton>등록</MyAwesomeButton>
            <hr/>
            <MyAwesomeButton color={"blue"}>저장</MyAwesomeButton>
            <MyAwesomeButton color={"yellow"}>수정</MyAwesomeButton>
        </>
    );
}
export { MyAwesomeButton };
export default App12;