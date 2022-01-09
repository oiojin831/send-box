- 연결된 데이터 삭제시 해결방법 - 2
  - window.fetch는 브라우져의 js에서 사용가능한 http request해주는 함수이다.
  - axios와 같은 package와 다르게 기본으로 제공되는거지만 불편한점들이 있을수있다.
    - 하지만 학습을 위해서는 더 좋다고 생각한다. fetch도 충분한 기능을 제공하기도 하고..
  - http status code(상태 코드)라는건 front와 back에 데이터를 주고 받을시에
    - 어떤 상태인지 서로 알려주기 위한 약속이다.
  - 보통 4xx, 5xx 형태의 code는 클라이언트 에러, 혹은 서버 에러로
    - axios같은경우는 4xx, 5xx가 response로 올경우 catch로 잡아 낼수있지만
    - fetch는 catch로 잡을 수 없다.
    - 일반적인 response 에서 ok가 들어왔는지 확인하고 아닌경우
    - 직접 error를 throw해줘야한다.
    - 그러면 catch로 잡아 줄수있다.

코딩

- pages/Products에서 삭제시 이미 catch 안에서 error를 로그 찍는 코드가 있지만
- 실제로 console.log로 찍히는 에러가 없는걸 볼수있다.(console.log를 지워도 에러메시지가 나오는걸 볼수있다.)
- 실제로 우리가 error를 핸들링 해줄려면 api-client에서 error을 발생 시켜야하고
- pages/Products에서 handling해줘야함.
- product 4번은 삭제가 될것이다.
- 그럼 에러메시지도 다시 안뜨게 바꿔야한다.
- 테스트를할떄 clean 데이터를 복사해서 db.json에 다시 넣어주는 방식으로 테스트를 하면 편하다.(서버를 껏다 켜야할수있다.)
  참고 자료

- https://camo.githubusercontent.com/d09839bf7ae593fa403793326a9af335e9392d622f89ea3ee13b889c02ece2fc/68747470733a2f2f7261776769746875622e636f6d2f666f722d4745542f687474702d6465636973696f6e2d6469616772616d2f6d61737465722f6874747064642e706e67
