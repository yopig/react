// 연습
// App14.jsx 에 App14, MyAwesomeAlert 컴포넌트 작성
// App14는 default export 하기
// MyAwesomeAlert은 named export 하기
import { myAddress as myAddress1, MyAwesomeAlerty } from "./App12";
// 현재 파일에서 App14, MyAwesomeAlert 을 import 해서 사용하기

function App15() {
    return (
        <>
            <App14 />
            <MyAwesomeAlert />
        </>
    );
}

export default App15;