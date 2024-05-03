"use client"
import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"

const RootProviders = ({children}:{children:ReactNode}) => {
  const [queryCilent]= React.useState(()=> new QueryClient({}))
  return (
    <div>
      <QueryClientProvider client={queryCilent}  >
      <ThemeProvider attribute='class'
      defaultTheme='dark'
      enableSystem
      disableTransitionOnChange
      >
        {children}

      </ThemeProvider>
      </QueryClientProvider>
      <ReactQueryDevtools  initialIsOpen={false} />
    </div>
  )
}

export default RootProviders
