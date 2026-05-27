export function Definition({ definition }) {
  return (
    <span
      dangerouslySetInnerHTML={{ __html: definition }}
      className="text-xl text-justify"
    />
  );
}
