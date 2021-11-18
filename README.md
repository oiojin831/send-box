user을 localstorage에 저장하기

- user을 localstorage에 저장함으로서 client에서 refresh에서 user 데이터 날라가지 않게 하기

1. login을 성공했을때 localstorage 의 setItem을 이용해서 userInfo를 저장한다.
2. browser inspector의 Application tab에서 localstorage가 저장되는지 확인할수있다.
3. setItem을 useState 의 초기값넎는 부분에 이요한다.
   a. https://ko.reactjs.org/docs/hooks-reference.html#lazy-initial-state
   b. state의 초기값을 함수로 하면 한번만 실행을한다.
   c. 비록 초기값은 원래부터 처음에만 사용하지만 초기값 위치에 expression이 있는경우 사용하지않더라도 함수가 매번 실행되게 되있기 때문에
   b. expression이 아닌 함수자체를 보내주면 한번만 실행된다.
   a. 테스트를 하기위해서 inspector에서 지워줘 가면서 테스트를한다.
