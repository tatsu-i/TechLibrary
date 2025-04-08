import { defineStore } from 'pinia'
import { ref } from 'vue'
import { signInWithGoogle, signOut, supabase } from './supabase'

export const useAuthStore = defineStore('auth', () => {
  const user = ref()
  const loading = ref(true)
  const error = ref()

  const initialize = async () => {
    loading.value = true
    try {
      const { data, error: userError } = await supabase.auth.getUser()
      if (userError) throw userError
      user.value = data.user
    } catch (err) {
      error.value = err
      user.value = null
    } finally {
      loading.value = false
    }
  }

  const loginWithGoogle = async () => {
    loading.value = true
    try {
      const { error: signInError } = await signInWithGoogle()
      if (signInError) throw signInError
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    loading.value = true
    error.value = null
    try {
      const { error: signOutError } = await signOut()
      if (signOutError) throw signOutError
      user.value = null
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  // 認証状態の監視
  supabase.auth.onAuthStateChange((event, session) => {
    user.value = session?.user || null
  })

  return {
    user,
    loading,
    error,
    initialize,
    loginWithGoogle,
    logout,
  }
})
