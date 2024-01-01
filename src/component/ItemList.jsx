import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

export const ItemList = ({ item }) => {
  // console.log(item)
  const dispatch = useDispatch();
  function handleItem(items) {
    dispatch(addItem(items));
    //    console.log(items)
  }
  function remove(){
    dispatch(removeItem())
  }

  return (
    <>
      <div>
        {item.map((data) => {
          return (
            <>
              <div
                className="p-2 m-3 border-black border-b-[1px] flex justify-between"
                key={data.card.info.id}
              >
                <div>
                  <p className="my-2">{data.card.info.name}</p>
                  <span>
                    ₹ {data.card.info.price/100 || data.card.info.defaultprice}
                  </span>

                  <p className="text-xs">{data.card.info.description}</p>
                </div>

                <div>
                  <div>
                    <img
                      src={CDN_URL + data.card.info.imageId}
                      className="w-[80px] h-auto "
                      alt="item"
                    />
                  </div>
                  <div className="flex mx-3">
                    <button
                      onClick={() => handleItem(data)}
                      className="w-[100px] shadow-lg border-r-4 bg-white p-1 m-1   "
                    >
                      Add+
                    </button>
                    <button
                      onClick={ remove}
                      className=" w-[100px] shadow-lg border-r-4 bg-white p-1 m-1 "
                    >
                   remove -
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
