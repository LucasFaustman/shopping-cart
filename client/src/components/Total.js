import {useSelector} from 'react-redux'

export default function Total() {

    const cart = useSelector((state) => state.cart)

    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cart.forEach(item => {
          totalQuantity += item.quantity
          totalPrice += item.price * item.quantity
        })
        return {totalPrice, totalQuantity}
      }

    return (
        <div>
            <p>
                Total: <strong>${getTotal().totalPrice.toFixed(2)}</strong>
            </p>
        </div>
    )

}