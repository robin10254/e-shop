import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteOrder } from "../reducer/orderFunctionReducer";
import { setOrder } from "../reducer/orderStateReducer";
import Navbar from "./Navbar";

const OrderPageView = () => {
  //Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ordersList = useSelector((state) => state.orderReducer.ordersList);

  const orderColName = [
    "Order ID",
    "Customer Name",
    "Customer Contact",
    "Order Status",
    "Product Name",
    "Total (Tk)",
    "Buttons",
  ];
  const [searchItem, setSearchItem] = useState("");

  //Functions
  const editItem = (item) => {
    dispatch(setOrder(item));
    return navigate("/edit/order");
  };

  const removeItem = (orderId) => {
    dispatch(deleteOrder(ordersList, orderId));
  };

  const onClickHandler = () => {
    return navigate("/add/order");
  };

  return (
    <div>
      <Navbar />
      <div className="productPage" style={{ marginTop: "5rem" }}>
        <input
          type="text"
          placeholder="🔍 Search Products ..."
          className="search-input"
          style={{ width: "40rem" }}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
        <button className="btn" onClick={onClickHandler}>
          Add
        </button>
      </div>
      <div className="tableView">
        <table cellSpacing="0" id="customers">
          <thead>
            <tr>
              {orderColName.map((obj, index) => {
                return <th key={index}>{obj}</th>;
              })}
            </tr>
          </thead>
          {ordersList
            .filter((item) => {
              if (searchItem === "") {
                return item;
              } else if (
                item.customerName
                  .toLowerCase()
                  .includes(searchItem.toLowerCase())
              ) {
                return item;
              }
              return "";
            })
            .map((item, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td key={0}>{item.orderId}</td>
                    <td key={1}>{item.customerName}</td>
                    <td key={2}>{item.contact}</td>
                    <td key={3}>{item.status}</td>
                    <td key={4}>{item.productName}</td>
                    <td key={5}>{item.total}</td>
                    <td key={6}>
                      <div style={{ flexDirection: "row" }}>
                        <button
                          type="button"
                          className="editButton"
                          onClick={() => editItem(item)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          type="button"
                          className="deleteButton"
                          onClick={() => removeItem(item.orderId)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default OrderPageView;
