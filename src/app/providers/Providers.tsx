'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReduxProvider from './ReduxProvider';
import axios from 'axios';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
          queryFn: async ({ queryKey: [url] }) => {
              if (typeof url === 'string') {
                  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/${url.toLowerCase()}`)
                  return data
              }
              throw new Error('Invalid QueryKey')
          },
      },
  },
  }));

  return (
    <ReduxProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ReduxProvider>
  );
}
