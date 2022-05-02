import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../Redux/action";
import {sort} from "../Redux/action"

export const Orders = () => {
    //  Get all data when admin logs in and populate it
    // store it in redux
    const orders = useSelector(
      (store)=> store.orders.orders

  );
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getOrder());
   },[])
  
    return (
      <div>
        <div>
          <div>
            <select 
             onChange={(e)=>{
              dispatch(sort(e.target.value));
         }}
            className="controls" name="progress" id="progress">
              <option value="id">ID</option>
              <option value="status">Status</option>
              <option value="cost">Cost</option>
            </select>
          </div>
         <table className="orders">
            <thead>
              <tr>
                <th>ID</th>
                <th>Problem</th>
                <th>Client Name</th>
                <th>Status</th>
                <th>Cost</th>
                <th>Change Status</th>
                <th>Accept</th>
              </tr>
            </thead>
            {orders.map((t) =>(
            <tbody>
              <tr  className="orders-row">
                <td key={t.id}className="id">{t.id}</td>
                <td key={t.id}className="problem">{t.problem}</td>
                <td key={t.id}className="owner">{t.owner_name}</td>
                <td key={t.id}className="status">{t.status}</td>
                <td key={t.id}className="cost">{t.cost}</td>
                <td key={t.id}className="change-status">
                  {/* Show select dropdown only if status is Not Accepted */}
                  <select className="changeStatus" name="changeStatus">
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                    <option value="Not Accepted">Not Accepted</option>
                  </select>
                </td>
                <td className="accept">
                  {/* Show this button only if status is Not Accepted */}
                  {/* on change make request to update it in db, and show changed status in table */}
                  <button>Accept</button>
                </td>
              </tr>
            </tbody>
            ))}
          </table>
        </div>
      </div>
    );
  };