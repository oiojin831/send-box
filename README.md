- 연결된 데이터 삭제시 해결방법 - 1

  - 이부분은 "비지니스 로직"으로 앱을 만드는 사람이 기획하고 결정하는부분이다.
  - 예를들어
    - 1. product를 어디선가 사용하고 있으면 지우지 못하게 한다.
      - 삭제전에 order데이터의 내가 지울려고하는 product의 id를 검색해서 있으면 지우지 못하게한다.
        - 번거롭지만 가능은하다.
      - 지금 우리가 사용하는 lowdb에서는 db가 연관되(related)데이터들의 관계에 대해서 잘모른다.
        - 프로그래어인 우리가 그부분을 인지하고 프로그램을 만들뿐이다.
        - 만약 mysql이나 postgresql을 사용하면 이부분을 더 쉽게 할수있다.
          - rdb라는 이름에서 알수있듯이 Relational Database로 관계에 대해서 인지하는 db다.
    - 2. product가 삭제가 가능하게 하고
      - frontend에서 방어적으로 코딩을 한다.
      - 이전 commit에서 처럼 ?.을 사용해서 방어적으로 코딩할수있다.
      - product는 optional data인거다.
      - api spec에서도 이것을 명시해야할것이다.
  - 여기서는 일단 server에서 product를 지울려고 할때 http error code를 client에게 보내줄거다.

    - 지금 database는 데이터가 꼬여있는 상태이므로 깨끗한 data를 제공해주겠다.
      - db.clean.json 파일에 있는 데이터를 db.json으로 옮겨서 코드를 작성하자.
    - products의 delete 부분의 서버코드를 고쳐보자.
    - 테스트시 console에서 409(400)에러가 뜨면 정상이다.

  - 다음 commit 에서는 이 error를 핸들링해보자.
