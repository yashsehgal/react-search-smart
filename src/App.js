import React from "react";
import ReactSearchSmart from "./component/ReactSearchSmart";
import { FaSearch } from 'react-icons/fa';

const usersData = [
  { 
    profile: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    username: 'John Doe' 
  },
  {
    profile: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80',
    username: 'Midas Hofstra'
  },
  {
    username: 'Yash Sehgal'
  },
  {
    username: 'Elon Musk'
  }
]

export default function App() {
  return (
    <div className="app" style={{
      fontFamily: 'Inter, sans-serif'
    }}>
      <ReactSearchSmart children={
        <React.Fragment>
          <FaSearch />
          <span>Search for users</span>
        </React.Fragment>
      } 
      dataList={usersData}
      inputPlaceholder="Search for users"
      />
    </div>
  )
}