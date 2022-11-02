이번에는 useSeletor를 완성해봅시다!

useSeletor를 통해 state가 필요한 컴포넌트에서
전역 변수 저장소 store에 저장된 state를 쉽게 불러올 수 있습니다.

- App.js
  안내한 순서에 따라 App.js를 완성해주세요!

1. import { useDispatch, useSeletor } from 'react-redux';를 통해
   react-redux에서 useSeletor 불러와주세요.
2. useSelector의 콜백 함수의 인자에 Store에 저장된 모든 state가
   담깁니다. 그대로 return을 하게 되면 Store에 저장된 모든 state를
   사용할 수 있습니다.
3. 변수 state를 콘솔에서 확인해보세요. Store에 저장된 기존 state 값인
   1이 찍히는 것을 확인할 수 있습니다.
4. Store에서 꺼내온 state를 화면에 나타내기 위해 변수 state를 활용해보세요.
5. +, - 버튼을 누를 때마다 state가 변경되는 것을 확인할 수 있습니다!
