import { MdOutlineShoppingCart } from "react-icons/md";
import { CartState } from "../context/Context";
export default function Header() {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <div className="navbar bg-base-100 justify-between">
      <div className="">
        <a className="btn btn-ghost text-xl">Cat Wars</a>
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
          onChange={(e) => {
            productDispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex-none gap-2 ">
        <details className="dropdown dropdown-end">
          <summary className="m-1 btn">
            <div className="indicator">
              <MdOutlineShoppingCart fontSize={25} />
              <span className="badge badge-sm indicator-item">
                {cart.length}
              </span>
            </div>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[500px]">
            {cart.length > 0 ? (
              <>
                {cart.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between py-5 ">
                      <div className="flex w-full gap-4 items-center">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item?.image} alt="" />
                          </div>
                        </div>
                        <h1 className="font-semibold text-[1.5em]">
                          {item?.name}
                        </h1>
                      </div>
                      <button
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: item,
                          });
                        }}
                        className="btn btn-primary bg-red-600 hover:bg-red-700"
                      >
                        X
                      </button>
                    </div>
                    <hr />
                  </div>
                ))}
              </>
            ) : (
              <li>
                <a>cart is empty</a>
              </li>
            )}
          </ul>
        </details>
      </div>
    </div>
  );
}
