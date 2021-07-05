import React from 'react';
import { MdDelete } from 'react-icons/md'
import './reservas.css'

function Reservas() {
  return (
    <div>
      <h1 className="title">Você solicitou 1 reserva</h1>

      <div className="reservas">
        <img
          src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg"
          alt="Maceió"
        />
        <strong>Viagem Maceió 7 Dias</strong>
        <span>Quantidade: 2</span>
        <button type="button" onClick={() => {}}>
          <MdDelete size={20} color="#191919" />
        </button>
      </div>

      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  );
}

export default Reservas;