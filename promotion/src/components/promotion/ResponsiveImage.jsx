export default function ResponsiveImage({ pc, mo, alt, maxWidth = 750, ...props }) {
  return (
    <picture {...props}>
      {mo && <source media={`(max-width: ${maxWidth}px)`} srcSet={mo} />}
      <img src={pc} alt={alt} />
    </picture>
  );
}
