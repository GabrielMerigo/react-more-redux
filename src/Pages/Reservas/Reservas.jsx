import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import './reservas.css'

function Reservas() {
  const dispatch = useDispatch()
  const reservas = useSelector(state => state.reserve);

  function handleRemove(id){
    dispatch({
      type: 'REMOVE_RESERVE',
      id
    })
  }

  return (
    <>
      <h1 className="title">Você solicitou {reservas.length} reserva</h1>

      {reservas.map(reserve => (
        <div>
          <div key={reserve.id} className="reservas">
            <img
              src={reserve.image}
              alt={reserve.title}
            />
            <strong>{reserve.title}</strong>
            <span>Quantidade: {reserve.amount}</span>
            <button type="button" onClick={() => handleRemove(reserve.id)}>
              <MdDelete size={20} color="#191919" />
            </button>
          </div>

        </div>
      ))}
      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </>
  );
}

export default Reservas;
