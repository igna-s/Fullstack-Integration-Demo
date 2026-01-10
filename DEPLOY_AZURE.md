# Azure Free Tier Deployment Guide

This guide provides the **exact commands** to create the necessary Azure resources for your "MyFirstUpload" project.

> [!CAUTION]
> **Region Availability**: You selected **Chile Central**. If this region blocks the **F1 (Free)** plan with a `RequestDisallowedByAzure` error, you **MUST** switch to `brazilsouth` (Brazil) or `centralus` (USA). Free tiers are often restricted in newer/smaller regions like Chile.

## Prerequisites
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) installed and logged in (`az login`).
- GitHub repository created and code pushed.


## 1. Create Resource Group
If a previous group exists in a failed state, delete it first.
```bash
az group create --name myfirstupload-rg --location chilecentral
```

## 2. Backend: Azure App Service (F1 Free Tier)

### Create App Service Plan (Free)
**Critical Step:** If this command fails, delete the group and try again with `--location brazilsouth` or `--location centralus`.
```bash
az appservice plan create --name myfirstupload-plan --resource-group myfirstupload-rg --sku F1 --is-linux --location chilecentral
```

### Create Web App
```bash
az webapp create --resource-group myfirstupload-rg --plan myfirstupload-plan --name myfirstupload-backend --runtime "PYTHON:3.12"
```

### Configure Environment Variables
```powershell
az webapp config appsettings set --resource-group myfirstupload-rg --name myfirstupload-backend --settings SECRET_KEY="wzFEwHmu1Ykcpfm8nAi1lKXPmPB2eCpfHrLfcKgAidKWkxAPm" DEBUG="False" ALLOWED_HOSTS="*" AZURE_SQLITE_PERSISTENCE="True" SCM_DO_BUILD_DURING_DEPLOYMENT="true" django_settings_module="rh_django.settings"
```

### Configure Startup Command
```bash
az webapp config set --resource-group myfirstupload-rg --name myfirstupload-backend --startup-file "gunicorn --bind=0.0.0.0 --timeout 600 rh_django.wsgi"
```

### Get Publish Profile for GitHub Actions
```bash
az webapp deployment list-publishing-profiles --name myfirstupload-backend --resource-group myfirstupload-rg --xml
```

## 3. Frontend: Azure Static Web Apps (Free)

### Create Static Web App
```powershell
az staticwebapp create --name myfirstupload-frontend --resource-group myfirstupload-rg --sku Free --location centralus --source https://github.com/igna-s/Fullstack-Integration-Demo --branch main --app-location "/rh-react" --output-location "dist" --login-with-github
```

### Get Deployment Token
```bash
az staticwebapp secrets list --name myfirstupload-frontend --resource-group myfirstupload-rg
```

## 4. Configuring GitHub Secrets (CRITICAL)

You need to save the keys you just got into your GitHub repository so the automated deployment works.

1.  Go to your GitHub Repository.
2.  Click on **Settings** (tab).
3.  On the left sidebar, look for **Secrets and variables** -> **Actions**.
4.  Click **New repository secret**.

### Secret 1: Backend
-   **Name**: `AZURE_WEBAPP_PUBLISH_PROFILE`
-   **Value**: The **entire XML output** from the command:
    ```bash
    az webapp deployment list-publishing-profiles --name myfirstupload-backend --resource-group myfirstupload-rg --xml
    ```
    *(Copy everything from `<publishData>` to `</publishData>`)*.

### Secret 2: Frontend
-   **Name**: `AZURE_STATIC_WEB_APPS_API_TOKEN`
-   **Value**: The `apiKey` value from this command:
    ```powershell
    az staticwebapp secrets list --name myfirstupload-frontend --resource-group myfirstupload-rg
    ```
    *(It's a long string of random characters)*.

### Secret 3: Django
-   **Name**: `SECRET_KEY`
-   **Value**: The random string you used in the "Configure Environment Variables" command (e.g. `wzFEwHmu1Ykcpfm8nAi1lKXPmPB2eCpfHrLfcKgAidKWkxAPm`).


## 5. Final Configuration

### Update Backend CORS
```powershell
# Get the frontend URL
$FRONTEND_URL = az staticwebapp show --name myfirstupload-frontend --resource-group myfirstupload-rg --query "defaultHostname" -o tsv

# Update Backend CORS and CSRF
az webapp config appsettings set --resource-group myfirstupload-rg --name myfirstupload-backend --settings CORS_ALLOWED_ORIGINS="https://$FRONTEND_URL" CSRF_TRUSTED_ORIGINS="https://$FRONTEND_URL"
```

## 6. Deploy and Validate

Now that infrastructure and secrets are ready, push your code to trigger the first deployment.

```bash
git add .
git commit -m "Configure Azure deployment"
git push origin main
```

-   Go to the **Actions** tab in GitHub to see the workflows running.
-   Once finished:
    -   **Backend**: `https://myfirstupload-backend.azurewebsites.net/admin` (should show Django Admin login).
    -   **Frontend**: `https://<random-name>.azurestaticapps.net` (should show your React app).
