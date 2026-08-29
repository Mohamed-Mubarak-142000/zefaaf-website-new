import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/shared/api";

import type { ContactFormValues } from "../model/schema";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (values: ContactFormValues) => {
      const { data } = await apiClient.post("/contact", values);
      return data;
    },
  });
}
