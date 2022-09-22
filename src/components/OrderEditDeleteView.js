import { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteOrder } from "../action";
import { userContext } from "../App";

const OrderEditDeleteView = ({ item }) => {
  const { setOrder, setIsEditing } = useContext(userContext);

  const { orderId, customerName, contact, status, productName, total } = item;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editItem = () => {
    // const editItem = list.find((item) => item.id === id );
    setIsEditing(true);
    setOrder({ ...item, orderId: orderId });
    setOrder({ ...item, customerName: customerName });
    setOrder({ ...item, contact: contact });
    setOrder({ ...item, status: status });
    setOrder({ ...item, productName: productName });
    setOrder({ ...item, total: total });

    return navigate("/edit/order");
  };

  const removeItem = () => {
    dispatch(deleteOrder(orderId));
  };

  return (
    <div style={{ flexDirection: "row" }}>
      <button type="button" className="editButton" onClick={editItem}>
        <FaEdit />
      </button>
      <button type="button" className="deleteButton" onClick={removeItem}>
        <FaTrash />
      </button>
    </div>
  );
};

export default OrderEditDeleteView;
