export default async function Homepage({ data }) {
  return (
    <main>
      {data.allTrails.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </main>
  );
}
