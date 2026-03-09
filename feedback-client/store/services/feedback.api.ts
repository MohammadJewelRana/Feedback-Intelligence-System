import { baseApi } from "../baseApi";

 

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    
    // Get all feedback
    getAllFeedback: builder.query({
      query: () => "/feedback",
      providesTags: ["Feedback"],
    }),

    // Get single feedback
    getSingleFeedback: builder.query({
      query: (id: string) => `/feedback/${id}`,
      providesTags: ["Feedback"],
    }),

    // Create feedback
    createFeedback: builder.mutation({
      query: (data) => ({
        url: "/feedback/create-feedback",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Feedback"],
    }),

    // Update feedback
    updateFeedback: builder.mutation({
      query: ({ id, data }) => ({
        url: `/feedback/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Feedback"],
    }),

    // Delete feedback
    deleteFeedback: builder.mutation({
      query: (id: string) => ({
        url: `/feedback/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Feedback"],
    }),
  }),
});

export const {
  useGetAllFeedbackQuery,
  useGetSingleFeedbackQuery,
  useCreateFeedbackMutation,
  useUpdateFeedbackMutation,
  useDeleteFeedbackMutation,
} = feedbackApi;