- orders 만들기
  - server와 client둘 다 만들기
  - order 데이터는 물건을 팔려는 사람이 물건을 웹싸이트에 올릴떄 생기는 데이터다.
    - order는 판매할려는 물건(혹은 주문한물건), product는 매대에 있는 상품이라고 생각하면된다.
    - order에 필요한 데이터는 대부분이
      - db의 다른곳에 있는 데이터들이다(연결 데이터).
        - 판매자가 누구인지 (seller)
        - 구매자가 누구인지 (buyer)
        - 어떤 상품인지 (product)
    - 위 정보를 알고있을때 order를 두가지 방법으로 표시해볼수있다.
      - (1) 모든 연결 데이터들를 같이 저장하는 방법
      - (1) 연결되는 데이터의 id만 저장하는 방법
- (1) 모든 연결 데이터들를 같이 저장하는 방법

```
{
  id: 1,
  seller:  {
    "id": 1,
    "nickname": "oiojin831",
    "name": "eung jin lee",
    "email": "oiojin831@gmail.com"
  },
  buyer: null,
  product: {
    "id": 2,
    "name": "adfaf",
    "price": 0,
    "year": 0
  }
}

```

- (2) 연결되는 데이터의 id만 저장하는 방법

```
{
  id: 1,
  sellerId: 1,
  buyerId: null,
  productId: 1,
}

```

- 보통 Nosql을 사용하는 (1)방법을
- sql을 사용하는경우 (2)번 형식으로하는데
- 지금 당장은 너무 신경쓰지말고
- 일단 (2)방법으로 할것이다.
- order detail에 해당하는
  - orders/:id 의 page와 server를 만들어보자.
- client에서 order data를 가져온후
  - user와 product의 데이터를 가져오는 방법으로 데이터를 가져와보자.
  - (예시 코드에 주석을 없애면 생기는 버그가 있다.)
