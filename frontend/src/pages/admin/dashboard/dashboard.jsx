import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import axios from "axios";
import { Descriptions } from 'antd';

const Dashboard = () => {
  const { data, setData } = useContext(MainContext);
  setData(data.filter(item=>item.id !== id))
  useEffect(()=>{

    axios.get("http://localhost:8080/product")
.then(res=>console.log(res.data))

  },[])
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div>Dashboard page</div>
      <div className="element">
        <h1>{console.log(data)}</h1>
      </div>



      <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col"><button>Delete</button> </th>


    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{item._id}</th>
      <td><img src={item.image} alt=""  width="60px" height="60px"/></td>
      <td>{item.title}</td>
      <td>{item.descriptions}</td>
      <td>{item.price}</td>
      <td><button className="btn btn-danger ">Delete</button></td>


    </tr>

  </tbody>
</table>
    </>
  );
};

export default Dashboard;
