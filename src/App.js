import React from "react";

const data = [
  {
    id: 1,
    name: "リオネル・メッシ",
    team: "FCバルセロナ",
    description:
      "アルゼンチンサンタフェ州ロサリオ出身のイタリア系アルゼンチン人サッカー選手。リーガ・エスパニョーラ・FCバルセロナ所属。アルゼンチン代表。ポジションはフォワード (wikipedia)",
    isFollow: "false",
  },
  {
    id: 2,
    name: "クリスティアーノ・ロナウド",
    team: "Juventus",
    description:
      "ポルトガル・フンシャル出身のサッカー選手。セリエA・ユヴェントスFC所属。ポルトガル代表。ポジションはフォワード (wikipedia)",
    isFollow: "true",
  },
  {
    id: 3,
    name: "ネイマール",
    team: "パリサンジェルマン",
    description:
      "ブラジル・サンパウロ州モジ・ダス・クルーゼス出身のサッカー選手。ブラジル代表。リーグ・アン・パリ・サンジェルマンFC所属。ポジションはフォワード (wikipedia)",
    isFollow: "false",
  },
];

function App() {
  const [accounts, setAccounts] = React.useState(data);
  const onClickFollow = React.useCallback(
    (id) => {
      const updateAccounts = accounts.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            isFollow: !e.isFollow,
          };
        } else {
          return e;
        }
      });
      setAccounts(updateAccounts);
    },
    [accounts, setAccounts]
  );
  return (
    <ul class="accountList">
      {accounts.map((e) => {
        return (
          <li key={e.id} class="accountList__item">
            <div>
              <div class="account__summary">
                <div>
                  <p class="account__name">{e.name}</p>
                  <p class="account__team">{e.team}</p>
                </div>
                <div>
                  <button
                    type="button"
                    class={`followBtn ${e.isFollow ? "isFollow" : ""}`}
                    onClick={() => onClickFollow(e.id)}
                  >
                    {e.isFollow ? "フォロー中" : "フォローする"}
                  </button>
                </div>
              </div>
              <p class="account__desctiption">{e.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default App;

//Jquery
// <!-- <!DOCTYPE html>
// <html lang="ja">
//   <head>
//     <link rel="stylesheet" href="style.css" />
//   </head>
//   <body data-feedly-mini="yes">
//     <main>
//       <div id="app">
//         <ul class="accountList">
//           <li
//             class="accountList__item js-account-item"
//             data-follow="false"
//             data-id="1"
//           >
//             <div>
//               <div class="account__summary">
//                 <div>
//                   <p class="account__name">リオネル・メッシ</p>
//                   <p class="account__team">FCバルセロナ</p>
//                 </div>
//                 <div>
//                   <button type="button" class="js-follow-btn followBtn">
//                     フォローする
//                   </button>
//                 </div>
//               </div>
//               <p class="account__description">
//                 アルゼンチンサンタフェ州ロサリオ出身のイタリア系アルゼンチン人サッカー選手。リーガ・エスパニョーラ・FCバルセロナ所属。アルゼンチン代表。ポジションはフォワード
//                 (wikipedia)
//               </p>
//             </div>
//           </li>
//           <li
//             class="accountList__item js-account-item"
//             data-follow="true"
//             data-id="2"
//           >
//             <div>
//               <div class="account__summary">
//                 <div>
//                   <p class="account__name">クリスティアーノ・ロナウド</p>
//                   <p class="account__team">Juventus</p>
//                 </div>
//                 <div>
//                   <button type="button" class="js-follow-btn followBtn">
//                     フォロー中
//                   </button>
//                 </div>
//               </div>
//               <p class="account__description">
//                 ポルトガル・フンシャル出身のサッカー選手。セリエA・ユヴェントスFC所属。ポルトガル代表。ポジションはフォワード
//                 (wikipedia)
//               </p>
//             </div>
//           </li>
//           <li
//             class="accountList__item js-account-item"
//             data-follow="false"
//             data-id="3"
//           >
//             <div>
//               <div class="account__summary">
//                 <div>
//                   <p class="account__name">ネイマール</p>
//                   <p class="account__team">パリサンジェルマン</p>
//                 </div>
//                 <div>
//                   <button type="button" class="js-follow-btn followBtn">
//                     フォローする
//                   </button>
//                 </div>
//               </div>
//               <p class="account__description">
//                 ブラジル・サンパウロ州モジ・ダス・クルーゼス出身のサッカー選手。ブラジル代表。リーグ・アン・パリ・サンジェルマンFC所属。ポジションはフォワード
//                 (wikipedia)
//               </p>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </main>
//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
//     <script src="script.js"></script>
//   </body>
// </html> -->

//script.js
// $(function () {
//   $(".js-account-item").each(function () {
//     var $this = $(this);
//     var $thisData = $this.data();
//     if ($thisData.follow) {
//       $this.find(".js-follow-btn").addClass("isFollow");
//     }
//   });

//   $(".js-follow-btn").on("click", function () {
//     var $this = $(this);
//     var $accountItem = $this.parents(".js-account-item");
//     var $thisData = $accountItem.data();

//     if ($thisData.follow) {
//       // ajax

//       $this.removeClass("isFollow");
//       $this.text("フォローする");
//       $accountItem.data("follow", false);
//     } else {
//       // ajax

//       $this.addClass("isFollow");
//       $this.text("フォロー中");
//       $accountItem.data("follow", true);
//     }
//   });
// });