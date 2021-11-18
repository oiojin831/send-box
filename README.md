localstorage사용하는 부분을 custom hook으로 만들기 - 1

- 기존에는 local storage에 user을 저장하는 타이밍이 서버에서 데이터를 가져왔을때이지만
- custom hook으로 만들기 위해서 저장하는 타이밍을 render(혹은 rerender)가 끝난이후에 실행되는 useEffect를 사용할것이다

1. useEffect를 사용해서 localstorage에 데이터를 저장한다.
