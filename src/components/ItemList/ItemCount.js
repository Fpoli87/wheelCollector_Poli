import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const incrementar = () => {
        setCount(count + 1);
    };

    const decrementar = () => {
        setCount((decVal) => (decVal > 0 ? count - 1 : count));
    };
  return (
    <div >
        <br />
        <h3 className="fst-italic">{count}</h3>
        <button type="button" className="btn btn-primary m-1" onClick={decrementar}>-</button>
        <button type="button" className="btn btn-primary m-1" disabled={count >= stock} onClick={incrementar}>+</button>
        <button type="button" className="btn btn-primary m-1" disabled={stock < 1} onClick={() => {
            if (count <= stock) {
                onAdd(count);
            } else {
                alert("No hay suficientes elementos");
            }
        }}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount