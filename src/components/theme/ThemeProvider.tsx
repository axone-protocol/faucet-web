import React from 'react'
import type { DeepReadonly } from '@okp4/ui'
import { ThemeProvider } from '@okp4/ui'

type ThemeProviderProps = DeepReadonly<{
  children: React.ReactNode
}>

const ThemeProviderWrapper: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default ThemeProviderWrapper
