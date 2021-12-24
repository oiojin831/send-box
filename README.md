- 서버 코드 파일 분리하기

  - web 서버를 만든다는건 어디선가 오는 요쳥(request)를 처리하는 코드를 만드는 것이다.
  - expressjs는 node의 http 모듈을 좀더 편하게 만든 library라고 생각하면된다.
  - 수많은 request들 중 공통적으로 실행해야 하는 코드(함수)를 각각의 route(경로, url)에 해당하는 코드를 실행하기 전에 공통적으로 실행하는 코드들을
    - middleware라고 부른다.
  - express는 여러개의 middleware로 서버를 만든다고 생각하면된다.
    - app.use(실행할미들웨어함수이름)의 형식으로 middleware 함수를 등록할수있다.
    - 때로는 일부의 request에만 적용되는 middleware가 있다.
      - 예를 들어 get, post, patch 와 같은 http method에 따라 실행하는 코드가 정해져있을때는
        - app.get(), app.post()와 같이 특정 상황에서만 실행되는 middleware함수를 등록할수있는 기능이 주어진다기

- 이전에 만들어 놓은 서버코드를 분리 시켜보자.

  - nodejs에서는 각가의 파일이 하나의 module(독립된 코드 공간)이기 때문에
    - expressjs에서 뭔가를 사용할려면 다시 request로 가져와야한다.
    - express의 Router를 가져올거다.
    - Router는 express() 를 실행시켜서 가져온 app 처럼 middleware를 등록이 가능하지만 서버를 만드는것은 아니고
      - route(경로, path, url)만 만드는것이다.
      - router에 middleware를 등록 시키고 export해서 index.js에서 사용할수있도록하자.

- module 로 export 하기
  - module은기 nodejs에서 사용가능한 특수 객체이다. module은 자기이 속해해있는 자기 파일을 말하는거라고 보면된다.
  - module의 exports key에 넣어주는 값을 다른 모듈에서 require할수있다.
