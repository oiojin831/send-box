- user 정보를 최상위로 lifting up 하기

- React에서는 state가 한방향 (부모 component에서 자식 component)로만 흐르므로
- 프로그래 전반에 걸쳐서 써야하는 user정보를 나눠 쓰기위해서는 user state가 App component에 있어야한다.
- 자식 component에 있던 user state를
- 최상위 부모 component에 만들고 관리하면서 user state와 state updater 함수를
- 다시 자식으로 내려주는 방식을 state를 lift up(들어 올린다) 라고 표현한다.
- Navigation에 잇던 user state를 App component로 올려주자.
- user 정보가 있어야만(로그인이 되어있어야만) 접근이 가능한 Dashboard page를 만들어주자.
  - 아무것도 없고 dashboard라고만 나오는 page면 지금은 충분하다.
