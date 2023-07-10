import React, { useState } from "react";
import style from "./Banner.module.css";
import { FaEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { idText } from "typescript";
const Banner = () => {
  const [isTable, setIsTable] = useState(false);
  let recorde = [
    {number: " 01 ",  name: " Company", contact: " Contact", country: " Country",},
    { number: " 02 ", name: " Alfred", contact: " Maria", country: " Germini" },
    { number: " 03 ", name: " Berglunds",contact: " Ctina",country: " Pakistan",},
    { number: " 04 ", name: " Centro", contact: " Chang", country: " india" },
    { number: " 05 ", name: " Ernst", contact: " Rolnd", country: " itly" },
    { number: " 06 ", name: " Island", contact: " Helen", country: " Dubai" },
    { number: " 07 ", name: " Koniglich", contact: " Philip",country: " China",},
    {number: " 08 ",  name: " Laughing",contact: " Yosh", country: " Afghanistan",},
    { number: " 09 ", name: " Nort", contact: " Giovi", country: " Rusia" },
    { number: " 10 ", name: " Paris", contact: " Marie", country: " Ukrine" },
  ];

  const deleteHandler = (id: any) => {
    let filteredRecords = recorde.filter((record: any) => record.id !== id);
    setIsTable(!filteredRecords);
  };

  return (
    <div className={style.main}>
      <table className={style.customers}>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Country</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {recorde.map((data, index) => {
          return (
            <>
              <tr key={index.toString()}>
                <td>{data.number}</td>
                <td>{data.name}</td>
                <td>{data.contact}</td>
                <td>{data.country} </td>
                <td className={style.green_icon}>
                  <FaEdit />
                </td>
                <td>
                  <span
                    className={style.red_icon}
                    onClick={() => deleteHandler(data.number)}>
                    <BsTrash />
                  </span>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Banner;
