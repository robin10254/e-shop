import { useContext } from "react";

import { userContext } from "../App";

const ProductPageView = () => {
  const { searchItem, setSearchItem, productColName } = useContext(userContext);

  return (
    <div>
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
        <button className="btn">Add</button>
      </div>
      <div className="productPage">
        <table cellSpacing="0" id="customers">
          <thead>
            <tr>
              {productColName.map((obj, index) => {
                // setIsPrinted(false);
                return <th key={index}>{obj}</th>;
              })}
            </tr>
          </thead>
          {/* {productList
            .filter((item) => {
              if (searchItem === "") {
                return item;
              } else if (
                item.firstName.toLowerCase().includes(searchItem.toLowerCase())
              ) {
                return item;
              }
              return "";
            })
            .map((item) => {
              return (
                <tbody>
                  <tr>
                    {Object.values(item).map((obj, index) => {
                      return <td key={index}>{obj}</td>;
                    })}
                  </tr>
                  ;
                </tbody>
              );
            })} */}
        </table>
      </div>
    </div>
  );
};

export default ProductPageView;