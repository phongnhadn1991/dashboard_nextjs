import "./Sidebar.scss";
import {
  HomeIcon,
  ClipboardDocumentCheckIcon,
  FingerPrintIcon,
  ChevronRightIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/outline";
import React from "react";
import Link from "next/link";
const Sidebar = () => {
  return (
    <aside className="p-sideBar w-[15rem] bg-[#111c43] fixed top-0 left-0 z-10 h-[100vh]">
      <div className="p-sideBar_logo border-b border-[#1e2e60] flex justify-center items-center h-[60px]">
        <p className="text-white text-center uppercase font-normal">
          Dashboard MCN
        </p>
      </div>
      <div className="p-sideBar_nav">
        <ul className="p-sideBar_list">
          <li className="p-sideBar_category">Main</li>
          <li className="p-sideBar_link active">
            <Link href="/">
              <i className="icon_link">
                <HomeIcon />
              </i>
              <span>Dashboard</span>
              <i className="icon_extend">
                <ChevronRightIcon />
              </i>
            </Link>
          </li>
          <li className="p-sideBar_category">Pages</li>
          <li className="p-sideBar_link">
            <Link href="/">
              <i className="icon_link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                  />
                </svg>
              </i>
              <span>Task</span>
              <i className="icon_extend">
                <ClipboardDocumentCheckIcon className="h-6 w-6" />
              </i>
            </Link>
          </li>
          <li className="p-sideBar_link has_sub">
            <Link href="/">
              <i className="icon_link">
                <FingerPrintIcon className="h-6 w-6" />
              </i>
              <span>Authentication</span>
              <i className="icon_extend">
                <ChevronRightIcon />
              </i>
            </Link>
          </li>
          <li className="p-sideBar_link has_sub">
            <Link href="/">
              <i className="icon_link">
                <ExclamationTriangleIcon />
              </i>
              <span>Error</span>
              <i className="icon_extend">
                <ChevronRightIcon />
              </i>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
