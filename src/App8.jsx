function MyComp1({name= "son ", age="44", city="london"}) {
    return (
        <>
    <ul>
        <li>이름 : {name}</li>
        <li>나이 : {age}</li>
        <li>도시 : {city}</li>
    </ul>
    </>
    )
}

function MyComp2({score = 98, name="홍길동"}) {
    return (
        <>
        <ul>
            <li>이름은 : {name} 이고 점수는 {score} 입니다.</li>
        </ul></>
    )
}

function App8() {

    return (
        <>
        <MyComp1/>
        <MyComp1 name={"lee"}/>
        <MyComp1 name={"lee"} age={55}/>
        <MyComp1 name={"lee"} age={66} city={"busan"}/>
        <MyComp2 score={98} name="홍길동"/>
        <MyComp2 score={88} name="장길산"/>
        <MyComp2 score={78} name="임꺽정"/>

            </>

    );
}
export default App8;