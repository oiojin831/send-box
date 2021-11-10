Product server CRUD API Array.find를 이용하도록 정리하기.

1. get product is 에 버그가 있다
2. object의 id와 index가 다르기 때문에
   a. update나 delete는 index를 구해서 사용해야된다.
3. insomnia로 테스트후
   a. delete를 했을경우 id와 index가 불일치하는거 확인
   b. update잘되는지 확인
   c. 새로운 데이터 추가 확인
   d. products list 확인
   e. product 한개 확인
