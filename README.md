# 🛠️Next.js 를 사용한 간단한 웹 만들기

## 시작하기 전에...

- **Next.js** 를 사용하기 위해 `Console` 창을 열어서 명령어 실행
- `npx create-next-app@latest`
- TS 를 사용하고 싶을 땐 `--typescript` 추가

<br/>
<hr/>

###### 20230501

> ## Next.js 으로 프로젝트 생성하기

<br/>
<p>
<img src ="md_resources\resource_01.png" height="250"/>
<img src ="md_resources\resource_02.png" height="250"/>
<p/>
<br/>
<br/>

- 명령어를 입력해 프로젝트 생성
- `npx create-next-app@latest`
- 터미널 창에서 `npm run dev` 를 실행 후 `localhost:3000` 에 접근 할 시 기본 창이 나옴

<br/>

> ## Library vs Framework

<br/>

- 라이브러리는 사용자가 직접 찾아서 사용하는 반면, 프레임워크는 기존의 틀에 맞춰서 작성해야 함

<br/>

| Library   | Framework      |
| --------- | -------------- |
| 직접 사용 | 틀에 맞춰 사용 |
| 유동적    | 형식적         |
| 자유로움  | 펀리함         |

<br/>
<p>
<img src ="md_resources\resource_04.png" height="120"/>
<img src ="md_resources\resource_03.png" height="120"/>
<p/>
<br/>

- `pages/...` 에 파일을 생성하면 자동으로 `routing` 됨
- 라이브러리 처럼 `router` 를 사용하지 않아도 되므로 편리함

<br/>

<br/>
<hr/>

###### 20230503

> ## Next.js Rendering

<br/>

- `Next.js` 는 `CRA(Create React App)` 와는 다르게 미리 웹 페이지를 만든 후 사용자에게 전달
- 사용자의 인터넷 속도, JS 동작 여부와는 상관없이 html 을 정상적으로 보여줌

<br/>
<br/>
<img src ="md_resources\resource_05.png" height="100"/>
<br/>

`Next.js` 는 웹페이지를 **Pre-Rendering** 한 후 뿌려줌

`ctrl + U` 로 확인하면 다수의 스크립트들이 보임

<br/>
<img src ="md_resources\resource_06.png" height="100"/>
<br/>
<br/>

웹 페이지에서 JS 기능이 동작하지 않을 때를 테스트 하기 위 해 만든 테스트 페이지

<br/>
<img src ="md_resources\resource_07.png" height="100"/>
<br/>
<br/>

`F12 > Setting > Preferences > Debugger` 의 JS 사용을 잠시 제한

<br/>
<img src ="md_resources\resource_08.png" height="100"/>
<br/>
<br/>

웹 페이지를 확인 해 보면 **HTML** 은 있지만 JS 가 꺼져있기 때문에 동작은 하지 않는 모습

`CRA` 로 만든 웹은 직접 JS 를 받아와서 실행하며 뿌려주기 때문에 JS 가 동작하지 않을 경우 웹 자체를 받아올 수 없음

하지만 `Next.js` 는 **Pre-Rendering** 으로 먼저 받아오기 때문에 **HTML** 은 존재하되 동작만 되지 않음
