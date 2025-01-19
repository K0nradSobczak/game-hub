import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from './components/ui/provider.tsx'
import { Theme } from '@chakra-ui/react'
import { ColorModeProvider } from "@/components/ui/color-mode"
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const client = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider>
        <ColorModeProvider forcedTheme='dark'>
        <Theme>
    <QueryClientProvider client={client}>
        <App />
        <ReactQueryDevtools/>
    </QueryClientProvider>
        </Theme>
        </ColorModeProvider>
      </Provider>
  </StrictMode>,
)
