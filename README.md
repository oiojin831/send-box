- 데이터 lowdb에 저장하기.

  - lowdb는 json 파일에 데이터를 저장하는 db

- 지금까지는 데이터를 변수(메모리)에 저장했다.
  - 서버를 끄면 날아가는 데이터로 product를 새로 생성해도 데이터가 날아가게 되있다.
- 데이터를 영구보관하는 방법은 여러가지가 있다.
  - 가장 흔하게 사용하는것이 sql(mysql, postgresql)
  - 혹은 nosql이라고 불리는 mongodb, firebase firestore 등도있고
  - redis와 같은 키,벨류를 저장하는 디비도 존재한다.
- 우리는 일단 서버를 꺼도 데이터가 유지 되도록 json파일에 데이터를 저장할것이다.

  - 실제 'fs'를 이용해서 데이터를 저장하고 사용해도 되겠지만
  - lowdb라는 가벼운 package를 사용해서 json파일의 데이터를 사용할거다.

- lowdb를 설치하고 기존 메모리에 있던 데이터를 json형태로 변경해보자.
  - lowdb는 json파일을 read한후(영구보관장치(ssd,hdd)에 저장된 file에 있는 데이터를 휘발성메모리(RAM)에 옮기는걸 읽는다고 표현한다.)
  - 일반적인 js데이터처럼 사용한다.
  - 데이터의 변화를 json파일에 적용시키는것을 write이라고 한다.
  - api에서 변경된 데이터가 있으면 db(json 파일)에 변경을 적용해주면된다.
