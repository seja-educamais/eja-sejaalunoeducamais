export type LeadAttempt = {
  signature: string;
  url: string;
  eventId: string;
};

export function resolveLeadAttempt(
  previous: LeadAttempt | null,
  signature: string,
  create: () => Omit<LeadAttempt, "signature">,
): { attempt: LeadAttempt; isNew: boolean } {
  if (previous?.signature === signature) return { attempt: previous, isNew: false };
  return { attempt: { signature, ...create() }, isNew: true };
}
