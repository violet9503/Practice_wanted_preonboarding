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

처음엔 'justify-content'의 값을 flex-start와 flex-end를 번갈아가며 수정하고, background-color를 아래와 같은 방법으로 구현.

```
${({ toggle }) =>
    toggle &&
    css`
      justify-content: flex-end;
      background-color: #6741d9;
    `}
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
