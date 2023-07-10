import React from "react";
import style from "./Header.module.css";
const Header = () => {
  let ary = [
    {name : "Rehan" , age : 24 , designation : "CEO"},
    {name : "Saad" , age : 26 , designation : "Senior developer"},
    {name : "Noman" , age : 24 , designation : "Team Lead"}
  ]
  return (
    <div className={style.container}>
      <div className={style.main}>
        <img src="/images/logo.PNG" alt="" />
        <ul>
             {
               ary.map((data , index) => {
                return <li>
                {index + 1} { data.name}
              </li>
              })
             }
        </ul>
 
      </div>
    </div>
  );
};

export default Header;















// import React from "react";
// import style from "./Header.module.css";
// const Header = () => {
//   let a = 10;
//   let b = 10;
//   let person = [
//     {name: 'ahsan', age: 25, designation: 'developer'},
//     {name: 'umar', age: 21, designation: 'designer'},
//     {name: 'ali', age: 23, designation: 'seo expert'},
//     {name: 'amir', age: 27, designation: 'internee'},
//     {name: 'rehman', age: 29, designation: 'team lead'},
//   ]
//   let sum = a + b;
//   console.log(sum);

//   return (
//     <div className={style.container}>
//       <div className={style.main}>
//         <img src="/images/logo.PNG" alt="" />
//         <ul>
//           {
//             person.map((user, index) => {
//               return <li>
//                   {user.name}
//               </li>
//             })
//           }
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;
