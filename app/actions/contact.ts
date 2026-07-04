"use server";

export interface ContactInput {
  name: string;
  email: string;
  serviceInterest: "AI Systems" | "Custom Software" | "Mobile App" | "Other";
  message: string;
  _honeypot: string;
}

export async function submitContact(
  data: ContactInput
): Promise<{ success: boolean }> {
  // Honeypot must be empty — bots that fill it are silently rejected
  if (data._honeypot !== "") {
    return { success: false };
  }

  console.log("LEAD:", data);
  // TODO: POST to FastAPI /api/v1/leads when backend is ready

  return { success: true };
}
