export default function Lista({titulo, elementos}) {
  return (
    <div>
      <h3>{titulo}</h3>
      <ul>
        {elementos?.length > 0
        ? elementos.map((elemento, i) => <li key={i}>{elemento}</li>)
        : <li>Lista vazia</li>}
      </ul>
    </div>
  );
}