1. server에 데이터를 업데이트 한다.
2. client에서 local데이터가 아닌 server data를 가져온다.
   a. useState와 useEffect를 사용해준다.
3. client directory에 가서
   a. npm run start
4. server directory에 가서
   a. npm run server
5. http://localhost:3000
   a. 에 들어가면
   b. 브라우져 console에서 에러를 확인할수있다
   localhost/:1 Access to fetch at 'http://localhost:8080/products' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
