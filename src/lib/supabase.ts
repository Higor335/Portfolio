import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let supabase: any

if (!supabaseUrl || !supabaseKey) {
  // Em desenvolvimento, se variáveis não estiverem definidas, usa mock mínimo.
  console.warn('⚠️ Variáveis de ambiente Supabase não definidas. Usando mock.');
  supabase = {
    auth: {
      async getSession() {
        return { data: { session: null } }
      },
      async onAuthStateChange() {
        return { data: { subscription: { unsubscribe: () => {} } } }
      },
      async signInWithPassword() {
        return { error: new Error('Supabase não configurado') }
      }
    },
    storage: {
      from() {
        return {
          async upload() {
            return { error: new Error('Supabase storage não configurado. Configure VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY.') }
          },
          getPublicUrl() {
            return { data: { publicUrl: '' } }
          }
        }
      }
    },
    from() {
      return {
        async insert() {
          return { error: new Error('Supabase database não configurado.') }
        }
      }
    }
  }
} else {
  supabase = createClient(supabaseUrl, supabaseKey)
}

export { supabase }