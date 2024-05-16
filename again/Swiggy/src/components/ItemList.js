import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
// import { addItem } from "../utils/cartSlice";
import { addItem } from "../utils/cartSlice";


const ItemList = ({ items, dummy }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((el) => (
        <div
          key={el.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between align-top" 
        >
            
          <div className="text-xl w-[70%]">
            <span>{el.card.info.name}</span>
            <span>
              {" "}
              - ₹{" "}
              {el.card.info.price
                ? el.card.info.price / 100
                : el.card.info.defaultPrice / 100}
            </span>
            <br/>
            <span className="text-xs opacity-60">{el.card.info.description}</span>
            <br/>
            <button className="bg-green-400 rounded-lg w-16 mt-3 text-gray-50"
              onClick={() => handleAddItem(el)}
              >Add</button>
          </div>
          <img src={CDN_URL + el.card.info.imageId} className="w-3/12 h-[150px] rounded-lg"/>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
