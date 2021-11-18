간단한 user 만들기

1. 일단 server에서 user array를 만들고 test용으로 사용할 유저를 하나 만든다.
   a. id, nickname, email, name 의 정보를 담고있다.
2. login을 만들어보자.
   a. routes 밖에 두도록하자 모든 페이지에서 보이도록
3. client에서는 현재 user를 일단 state에 저장하고 있다.
   a. browser를 refresh 하면 어떻게 될까?
4. client에서 nickname을 서버에 보내면 서버에서 매칭하는 user를 찾아서 client로 보내주고 없는 경우는 401을 보내준다.
