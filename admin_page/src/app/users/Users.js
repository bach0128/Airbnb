"use client";
import React from "react";
import { useEffect, useState, setErrors } from "react";
import { client } from "../../components/config/user/api";
import { IoSearch } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import "../assets/css/user_page.css";

import Image from "next/image";

const Users = function () {
  const [users, setUsers] = useState([]);
  const getUsers = async function () {
    const { response, data } = await client.get("users");
    setUsers(data.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main className="bg-slate-100 min-h-lvh p-4">
      <header>
        <h1 className="text-3xl font-bold">Customers Lists</h1>
        <p>
          You have total <span className="font-bold">{users?.length}</span>{" "}
          customers.
        </p>
      </header>
      <div className="">
        <div className="header flex items-center justify-between ">
          <span>
            <IoSearch className="cursor-pointer" />
          </span>
          <input type="text" name="p" autoFocus />
        </div>
        <div className="table border border-gray-300 rounded-xl w-full max-h-fit overflow-x-scroll shadow-lg text-gray-600 bg-white">
          <div className="table-header-group font-bold text-black border-bottom-row">
            <div className="table-cell text-left p-2">User</div>
            <div className="table-cell text-left p-2">Admin</div>
            <div className="table-cell text-left p-2">Role</div>
          </div>
          {users?.map((user) => {
            return (
              <div key={user.id} className="table-row border-bottom-row-item">
                <div className="table-cell text-left p-2">
                  <div className="flex">
                    <div className="w-[40px] h-[40px] relative mr-2">
                      <Image
                        // src={user.thumbnail}
                        src="https://4.bp.blogspot.com/-7yl0bnFz0i0/UkQCBriBnJI/AAAAAAAAAiA/tceMEfJHskk/s1600/anh-dep-hinh-nen-thien-nhien-7.jpg"
                        alt="user.thumbnail"
                        objectFit="fill"
                        sizes="auto"
                        fill={true}
                        className="rounded-full"
                      />
                    </div>
                    <div className="block">
                      <h2>{user.name}</h2>
                      <p>{user.email}</p>
                    </div>
                  </div>
                </div>
                <div className="table-cell text-left p-2 text-lg font-bold">
                  {user.admin === "true" ? (
                    <IoCheckmarkOutline />
                  ) : (
                    <IoCloseOutline />
                  )}
                </div>
                <div className="table-cell text-left p-2">Role</div>
                <div className="table-cell text-left p-2">
                  <button className="btn font-bold text-purple-800 hover:text-black">
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Users;
