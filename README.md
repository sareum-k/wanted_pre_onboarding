# 원티드 프리온보딩 코스
custom component 과제 6가지 중 6가지를 구현하였습니다.

- Toggle
- Modal
- Tab
- Tag
- AutoComplete
- ClickToEdit
</br>
</br>
</br>
# 구현 방법
코드는 React Hook인 `useEffect, useState, useRef`를 이용하여 구현하였습니다.
CSS는 styled-components를 이용하여 구현하였습니다.
</br>
</br>
</br>
# styled-components를 사용한 이유
1. 스스로 별도의 className을 생성하기 때문에 className의 중복이나 오타로 인한 버그가 줄어들기 때문입니다.
2. React의 props 또는 전역 속성을 기반으로 컴포넌트에 스타일 속성을 부여하기 때문에 간단하고 직관적으로 사용이 가능하기 때문입니다.
</br>
</br>
</br>
# 구현의 어려움
AutoComplete을 구현함에 있어 DropDown 및 동일한 글자를 매치시키는 것을 어떻게 구현하면 좋을지 개념을 잡기까지 많은 어려움이 있었습니다. 
프로젝트 시에 접했던 정규표현식을 통한 접근이 가능한 것을 알게 되었고 RegExp 내장 객체를 이용하여 구현을 진행하였습니다. 
앞으로도 정규식에 대한 공부를 추가적으로 해봐야겠다는 생각을 했습니다.
</br>
</br>
</br>
# Error Handling
### npm create-react-app 설치 오류
- 에러문구: You are running `create-react-app` 4.0.3, which is behind the latest release (5.0.0).
- 언제: npm create-react-app 명령문 입력 후 위와 같은 오류 코드 발생
- 에러접근: 버전의 문제로 보여졌고 구글링 결과 글로벌 지원을 하지 않아서(Global installs of create-react-app are no longer supported) 생긴 문제같았다. 
          구글릭을 통해 아래와 같은 방법으로 해결하였다.
- 해결방법: 1. 전역적으로 설치되어있는 react app 제거 2. 캐시 삭제 명령어 입력 3. npm create-react-app 실행
- </br>
</br>
</br>
# 실행 gif
</br>
### Toggle
![toggle](https://user-images.githubusercontent.com/87534763/153128844-dc63c299-0ce1-4e1d-adf0-f9c176f461db.gif)
</br>
### Modal
![modal](https://user-images.githubusercontent.com/87534763/153128947-30203fb9-a25f-49e5-89c1-47bbee7d13da.gif)
</br>
### Tab
![tab](https://user-images.githubusercontent.com/87534763/153128981-da21c3fe-7c40-482d-a1f7-640081a429da.gif)
</br>
### Tag
![tag](https://user-images.githubusercontent.com/87534763/153128998-43577635-719d-4bdc-a120-a46b67c1126b.gif)
</br>
### AutoComplete
![autoComplete](https://user-images.githubusercontent.com/87534763/153129029-d6f48dfe-2f6e-4611-a0f1-c84b90d31f93.gif)
</br>
### ClickToEdit
![clickToEdit](https://user-images.githubusercontent.com/87534763/153129089-b3c0622c-a04d-4ec9-98f6-97aa7fdecdd6.gif)
