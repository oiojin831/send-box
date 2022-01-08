- fetching util 만들기
  - fetch의 기본동작인 "GET method"만 적용되는 data를 서버에서 가져와서 json데이터를 js데이터로 만들어주는 함수를 만들어보자.

```
apiClient(`products/${id}`)
  .then((data) => setProduct(data))
  .catch((err) => console.log(err));
```

- Product page에서 위와 같은 코드로 사용할수있게 함수를 만들어보자.
