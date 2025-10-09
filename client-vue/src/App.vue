<template>
  <button @click="login">登入 Azure</button>
  <button @click="callApi">呼叫 API</button>
  <div>{{ apiResult }}</div>
</template>

<script setup>
import { useMsal } from '@azure/msal-vue'
import axios from 'axios'
import { ref } from 'vue'

const apiResult = ref('')
const { instance } = useMsal()

async function login() {
  await instance.loginPopup()
}

async function callApi() {
  const account = instance.getActiveAccount()
  const response = await instance.acquireTokenSilent({
    scopes: ['api://<your-api-client-id>/user_impersonation'],
    account,
  })
  const token = response.accessToken

  const res = await axios.get('https://localhost:5001/api/test', {
    headers: { Authorization: `Bearer ${token}` }
  })
  apiResult.value = res.data.message
}
</script>
