// Server- and client-safe JSON-LD renderer. Escapes '<' so a literal
// "</script>" inside any string value cannot terminate the tag early.
const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replace(/</g, '\\u003c'),
    }}
  />
);

export default JsonLd;
