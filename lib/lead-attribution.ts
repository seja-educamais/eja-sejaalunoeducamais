const MAX_REFERENCE_LENGTH = 48;

function cleanReference(value: string | null) {
  if (value?.includes("{{") || value?.includes("}}")) return "";
  return value
    ?.replace(/[^\p{L}\p{N} ._-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_REFERENCE_LENGTH)
    .trim() ?? "";
}

export function getLeadAttribution(search: string) {
  const params = new URLSearchParams(search);
  const source = cleanReference(params.get("utm_source")) || (params.has("fbclid") ? "Meta" : "");
  const campaign = cleanReference(params.get("utm_campaign") || params.get("utm_id") || params.get("campaign_id"));
  const creative = cleanReference(params.get("utm_content") || params.get("ad_id"));

  return [
    source && `Origem: ${source}`,
    campaign && `Campanha: ${campaign}`,
    creative && `Criativo: ${creative}`,
  ].filter(Boolean).join(" | ");
}
