import { useState } from "react";
import api from "@/api/axios";
import type { ApiOptions } from "@/types";

export function useApi<T = unknown>() {
  const [loading, setLoading] = useState(false);

  // makes the request and unwraps the { success, message, data } envelope
  async function execute(options: ApiOptions): Promise<T | null> {
    const { endpoint, method = "GET", body, params } = options;

    setLoading(true);

    try {
      const res = await api.request<{ success: boolean; message: string; data: T }>({
        url: endpoint,
        method,
        data: body,
        params,
      });

      return res.data?.data ?? (res.data as T);
    } catch (err) {
      // axios interceptor already normalises the message into an Error
      const msg = err instanceof Error ? err.message : "Something went wrong";
      throw new Error(msg);
    } finally {
      setLoading(false);
    }
  }

  return { loading, execute };
}
