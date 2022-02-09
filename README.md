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
'toggle' 상태 변화를 통해 flex-end, 보라색으로 아래와 같이 변화 시킴

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

이후에 animation 설정을 통해 구현해보려했지만 'toggle' 상태에 따라 변화시키는 것이 아닌 일방적으로 반복적인 애니메이션만 가능했음.

따라서 아래와 같이 transition을 기본 css에 적용하고, 'toggle' 상태 변화에 따라 width 수치 변경하여 구현 성공.

```
transition: all 0.3s;                   /* progress bar */
transition: transform 0.3s ease-in-out; /* toggle 버튼 */
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
