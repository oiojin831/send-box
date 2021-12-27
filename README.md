- env 설정하기.

  - 정의

    - env 혹은 environment variable, 환경 변수라고 불린다.
    - 간단하게 설명하면 컴퓨터전체에서 사용하는 변수 라고 생각하면된다.
      - 우리가 쓰는 언어(javascript) 혹은 java, c, 어떤 언어에 묶여있는게 아니고
      - 컴퓨터OS, 설치된 프로그램에서 참조해서 쓸수있는 변수를 의미한다.
      - 예시
        - macos와 linux와 같은 unix계열 컴퓨터에서 가장 대표적으로 볼수있는 환경변수는
        - PATH, HOME 과 같은것이있다.
        - 터미널에서 확인해보기위해 `echo $HOME`
        - 과 같은 방법으로 값을 확인해볼수있다.

  - 사용방법

    - 변수를 만드는 방법. KEY=value
      - key, value형태 저장하는데
        - key는
          - 대부분 모든글자를 대문자로 표시한다.
          - 띄어 쓰기 대신 \_(under_bar)를 사용한다는
        - 중간에
          - 는(=)기호를 띄어쓰기 없이 쓰고
        - value
          - 그냥 대소문자 상관없이 기을 쓰면된다.
    - 대부분 .env 혹은 .env.local 등과 같은 파일에 저장한다.
      - 파일 이름앞에 .(점)이 붙은경우 숨김파일임을 의미한다.
      - git에 저장하면 안되므로 .gitignore에 넣어둔다.
      - react에서는 다른 설정이 필요없다.
      - node에서는 dotenv를 설치해줘야한다.

  - 왜 필요한가?

    - 개발을 할때 개발기기인 내 컴퓨터의 환경, 배포를 했을경우 배포가 된컴퓨터의 환경에 따라 필요한 값이 있는경우가 있다.
      - 예를 들어 서버의 ip주소, 혹은 github와 같은 저장공간에 올라가면 안되는 비밀키 등
      - 이런 정보(데이터)를 환경에 맞게 사용하기위해서 환경변수를 사용한다.

  - env 설정하기
    - create-react-app으로 만든 프로젝트에서는
      - .env.local 에 저장해준다.
      - https://create-react-app.dev/docs/adding-custom-environment-variables/
      - REACT*APP*
      - 을 앞에 붙여준다.
    - node에서는
      - dotenv를 설치해주고
      - .env 파일에 환경변수를 설정하면된다.
      - dotenv를 설치하기전에
        - 수동으로 node파일을 실행할떄 환경변수를 설정하는 방법으로
        - server directory 안에서
        - PORT=8080 node index.js
          - 이런방식으로도 실행 시켜봐라
          - 8080포트로 서버가 실행되는걸 볼수있다.
            - 를 찍어보면 변수안에 저장된데이터를 확인할수있다.
          - 하지만 우리는 dotenv를 설치해서 .env 파일에 많은 환경변수를 설정할것이다.
    - react는 .env.local node .env에 설정하는 차이가 있다.
  - env 사용하기
    - process라는 객체를 이용해서 사용한다.
    - process.env.PORT

- 내 로컬 컴퓨터에 넣은 .env 파일은 git에 포함되지않으므로 github에 올라오지는않는다.
- 그래서 동일한 내용을 담고있는 .env.local.example 과 .env.example을 포함했다.
- 가장 뒤에 .example 확장자를 지우면된다.
- 나중에 배포할때는 배포하는 서버에 .env를 따로 설정해줘야한다.
