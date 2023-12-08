//4. React: 條件渲染
//問題：在React中，如何根據條件渲染兩種不同的內容？

//運用三元運算子式來決定渲染的畫面
//如果isLoggedIn = true，就渲染第一個p
//為false就渲染第二個p

function ConditionalRendering({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn ? (
        <p>You have logged in!</p>
      ) : (
        <p>You haven't logged in yet...</p>
      )}
    </>
  );
}
