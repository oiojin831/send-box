1. server에 cors문제를 해결해주는 middleware를 설치해준다.
   a. server directory에 가서
   b. npm install cors
   c. server를 다시 설치해준다.
2. server/index.js 에서 cors를 사용해준다.
3. server의 코드를 수정했으므로 server를 껏다 켜야한다.
4. server 코드를 수정할때마다 껏다 키기 귀찮으니
   a. nodemon을 설치해준다.
   b. npm install nodemon
5. package.json에서 script를 수정해준다.
   a. nodemon index.js
   b. npm run server
6. server에 products/1 api를 만든고 저장후 적용되는걸 브라우져에서 확인해보자.
   a. server를 껏다 키지않고
   b. http://localhost:8080/products/1 에 접속해본다.
