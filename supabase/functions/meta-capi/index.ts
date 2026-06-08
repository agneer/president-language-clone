// Meta Conversions API - PageView (server-side, deduplicated with Pixel via event_id)
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const PIXEL_ID = "1009910047703439";
const ACCESS_TOKEN = Deno.env.get("META_CAPI_ACCESS_TOKEN");
const TEST_EVENT_CODE = Deno.env.get("META_TEST_EVENT_CODE"); // optional

async function sha256(input: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input.trim().toLowerCase()));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    if (!ACCESS_TOKEN) {
      return new Response(JSON.stringify({ error: "Missing META_CAPI_ACCESS_TOKEN" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json().catch(() => ({} as Record<string, unknown>));
    const {
      event_id,
      event_source_url,
      fbp,
      fbc,
      external_id,
      email,
      phone,
    } = body as Record<string, string | undefined>;

    // Client IP & user agent from request headers
    const xff = req.headers.get("x-forwarded-for") || "";
    const client_ip_address = xff.split(",")[0]?.trim() || req.headers.get("cf-connecting-ip") || "";
    const client_user_agent = req.headers.get("user-agent") || "";

    const user_data: Record<string, unknown> = {
      client_ip_address,
      client_user_agent,
    };
    if (fbp) user_data.fbp = fbp;
    if (fbc) user_data.fbc = fbc;
    if (external_id) user_data.external_id = [await sha256(external_id)];
    if (email) user_data.em = [await sha256(email)];
    if (phone) user_data.ph = [await sha256(phone.replace(/\D/g, ""))];

    const payload: Record<string, unknown> = {
      data: [
        {
          event_name: "PageView",
          event_time: Math.floor(Date.now() / 1000),
          event_id: event_id || crypto.randomUUID(),
          event_source_url: event_source_url || req.headers.get("referer") || "",
          action_source: "website",
          user_data,
        },
      ],
    };
    if (TEST_EVENT_CODE) payload.test_event_code = TEST_EVENT_CODE;

    const res = await fetch(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );

    const result = await res.json();
    return new Response(JSON.stringify({ ok: res.ok, result }), {
      status: res.ok ? 200 : 502,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
