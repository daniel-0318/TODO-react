import './TodoCounter.css';

// const  estilos = {
//   fontSize: '24px',
//   textAling: 'center',
//   margin: 0,
//   padding: '48px'
// }

function TodoCounter({total, completed}) {
  return (
    <h1 className='TodoCounter'>
      Has completado <span> { completed } </span> 
      de {total} TODOs</h1>
  );
}

export { TodoCounter };