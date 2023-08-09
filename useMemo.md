# useMemo Hook

The useMemo hook provides a way to add memoization inside our components. It’s used to optimize expensive or complex calculations where it caches the result of a function call and stores it to be used later without recalculating it.

The memoized value is, however, recalculated only when the dependencies of the useMemo hook change. And yes, this hook’s parameters are the same as the useEffect hook you already know.

The hook takes in two arguments: a calculateValue callback and a dependencies array.

```js
import { useMemo } from "react";

function Cart({ products }) {
  const totalPrice = useMemo(() => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
  }, [products]);

  return (
    <div>
      {/* Some other content in the cart */}
      {/* Products to display */}
      <p>
        Total Price: <strong>${totalPrice}</strong>
      </p>
      {/* Some button to checkout */}
    </div>
  );
}
```
