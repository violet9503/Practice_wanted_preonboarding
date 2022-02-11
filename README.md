# 원티드 프리 온보딩 '수강생 선발 과제' 연습

---

https://codestates.notion.site/5f83f7a007664f1abcf0cdbcbbbbd521 사이트의 컴포넌트 직접 구현

- 아래에 여섯 가지의 프론트엔드에서 자주 사용하는 컴포넌트 구현하기
  - Toggle.js
  - Modal.js
  - Tab.js
  - Tag.js
  - AutoComplete.js
  - ClickToEdit.js

---

## Toggle Component

처음엔 'justify-content'의 값을 flex-start, background-color를 회색으로 세팅
'toggle' 상태 변화를 통해 flex-end, 보라색으로 아래와 같이 변화 시킴.

```
justify-content: flex-start;
background-color: #bbb;

${({ toggle }) =>
    toggle &&
    css`
      justify-content: flex-end;
      background-color: #6741d9;
    `}
```

이후에 animation 설정을 통해 구현해보려했지만 'toggle' 상태에 따라 변화시키는 것이 아닌 일방적으로 반복적인 애니메이션만 가능했습니다.

따라서 아래와 같이 transition을 기본 css에 적용하고, 'toggle' 상태 변화에 따라 width 수치 변경하여 구현 성공.

```
transition: all 0.3s;                   /* progress bar */
transition: transform 0.3s ease-in-out; /* toggle 버튼 */
```

---

## Modal Component

뒷배경을 아래와 같이 구현하고 Dialog 메시지 박스를 children으로 쉽게 구현 가능했습니다.

다만, 여러 div 요소들에 반복적인 css 요소가 있어서 global style로 지정하여 빠르게 레이아웃을 만들 수 있지 않을까하는 생각이 들었습니다.

```
position: fixed;
background-color: rgba(0, 0, 0, 0.8);
idth: 100%;
height: 100%;
top: 0;
left: 0;
```

---

## Tab Component

단순 구현은 쉬울 것 같아 Tab 개수 설정에 따라 맞춤 컴포넌트가 될 수 있도록 구현 진행했습니다.

이 프로젝트에서는 예제 내용을 컴포넌트 내부 const 변수로 선언했지만, 실무에서는 redux 등의 전역 상태 관리 라이브러리 또는 props를 통해 받는다는 생각도 같이 하면서 구현했습니다.

또한 아래와 같이 selected 프로퍼티를 꼭 넣어야만 컴포넌트가 작동하는 것이 아닌 useState를 통해 컴포넌트 내부에서 선택된 Tab 내용을 따로 관리해주었습니다.

```
const tabContents = [
{ id: 1, content: "ONE", selected : true },
{ id: 2, content: "TWO", selected : false },
{ id: 3, content: "THREE", selected : false },
];
```

추가로, Tab 개수에 따른 width 변경은 아래와 같이 구현을 해도 실제 적용이 된다는 점을 확인할 수 있었습니다.

```
width: ${(props) => 100 / props.count}%;
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
