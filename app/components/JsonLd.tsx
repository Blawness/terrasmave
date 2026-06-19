/**
 * Renders a JSON-LD <script> for structured data.
 * Server-safe — include directly in any Server Component page.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
