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
