- useContext 사용하기
  useContext는 문맥을 사용하는 hook이라고 생각 하면된다.
  예를 들어 "밤"이라는 단어는 "오늘 밤에 바다에 가자"라고 하면 시간을 나타내는 단어지마
  "구운 밤이 참 맛있어" 하면 먹는 밤을 말하듯이 문맥에 따라 단어의 뜻이 달라지는 것을 볼수있다.
  코딩에서도 "context(문맥)"에따라 특정 변수(혹은 state)를 사용가능할수있고 없고가 생긴다.
  react에서 state를 관리하고 있는 컴포넌트와 사용하는 곳이 너무 멀때(drilling을 많이 해야할때) createContext와 useContext를 이용해서 drilling없이 필요한곳에만 사용할수있는 방법이 있는것이다.
  - provider component를 만들어야한다.
    - state을 쥐고있는?
    - UserContext.Provider로 감싸면 되는데 간략하게 만들기위해
    - createContext로 context(문맥)을 만들자. -> UserContext
    - UserProvider를 만든다.
      - UserContext 의 Provider로 <UserContext.Provider>에 property로 value를 지정해주면
      - 이 문맥(context)에 값이 설정된다고 보면된다.
    - UserProvider의 자식에서는 useContext로 UserContext에 저장된 데이터를 가져올수있다.
