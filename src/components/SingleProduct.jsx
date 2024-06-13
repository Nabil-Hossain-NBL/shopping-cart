import { CartState } from "../context/Context";

export default function SingleProduct({ item }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl p-0 rounded-none">
      <figure>
        <img src={item?.image} alt="" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{item?.name}</h2>
          <h2 className="card-title">${item?.price}</h2>
        </div>

        <div className="card-actions justify-center">
          {cart.some((i) => i.id === item.id) ? (
            <button className="btn btn-primary bg-red-600 hover:bg-red-700">
              Remove From Cart
            </button>
          ) : (
            <button className="btn btn-primary">Add To Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}
