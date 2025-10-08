# Azure AD Authentication Demo with Vue 3 + .NET 8

本專案展示如何使用 Azure Active Directory (Azure AD) 進行前後端分離式認證，前端採用 Vue 3 + MSAL，後端為 .NET 8 Web API。

## 架構說明

- **前端 (client-vue)**  
  使用 Vue 3 搭配 @azure/msal-vue 實現 Azure AD 登入、取得 access token，並帶 token 呼叫後端 API。

- **後端 (server-dotnet8)**  
  ASP.NET Core (.NET 8) Web API，透過 Microsoft.Identity.Web 驗證前端送來的 Azure AD JWT token。

## 如何運作

1. 使用者在前端登入 Azure AD，取得 access token。
2. 前端將 access token 以 Bearer Token 方式呼叫後端 API。
3. 後端驗證 token，通過則回傳資料。

## 檔案結構

```
azure-auth-demo/
├── client-vue/        # Vue 3 前端專案
└── server-dotnet8/    # .NET 8 Web API 專案
```

## 快速開始

### Azure AD 設定

1. Azure Portal 建立 App registrations（前端、API 各一個）
2. API App 設定 scope（例如：api://<API_CLIENT_ID>/user_impersonation）
3. 前端 App 設定 Redirect URI 為 http://localhost:5173
4. 於程式碼中填入 ClientId、TenantId

### 前端啟動

```sh
cd client-vue
npm install
npm run dev
```

### 後端啟動

```sh
cd server-dotnet8
dotnet restore
dotnet run
```

## 參考

- [Microsoft Identity Platform Documentation](https://learn.microsoft.com/en-us/azure/active-directory/develop/)
- [Microsoft.Identity.Web](https://learn.microsoft.com/en-us/dotnet/api/microsoft.identity.web)
- [MSAL.js for Vue](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-vue)