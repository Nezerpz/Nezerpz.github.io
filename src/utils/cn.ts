export default function cn(
  ...inputs: Array<string | false | null | undefined | Record<string, boolean>>
): string {
  const out: string[] = [];
  for (const v of inputs) {
    if (!v) continue;
    if (typeof v === 'string') {
      out.push(v);
    } else if (Array.isArray(v)) {
      out.push(v.filter(Boolean).join(' '));
    } else if (typeof v === 'object') {
      for (const [k, val] of Object.entries(v)) if (val) out.push(k);
    }
  }
  return out.join(' ').trim();
}
