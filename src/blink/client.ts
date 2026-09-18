import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'boleict-showcase-rgsb0ae7',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_pef0iib0hlJF2l1JMcobRvOL376PBEBe',
  authRequired: false,
  auth: { mode: 'managed' },
})
