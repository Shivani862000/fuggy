import { ItemList } from "./ItemList";

export const ResCategory =({category ,showItems,setShowIndex})=>{
    const data =category
    // const [show,setShow] = useState(false)
    // console.log(setShowIndex)
    const handleClick =()=>{
    setShowIndex();
    }
    return(
        <>
          <div className="w-full my-4 mx-auto p-3 bg-gray-100  ">
            <div onClick={handleClick} className="flex justify-between ">
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇</span>

            </div>
            {showItems && <ItemList item={data.itemCards}/> }
          </div>
        </>
    )
}