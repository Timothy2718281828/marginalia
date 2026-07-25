# Marginalia deploy script — one command to build + upload + publish + push
param(
    [string]$server = "ubuntu@150.158.54.129",
    [string]$key = "$env:USERPROFILE\.ssh\id_ed25519"
)

Write-Host "Building..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { throw "Build failed" }

Write-Host "Uploading..." -ForegroundColor Cyan
tar -czf dist.tar.gz dist
scp -i $key dist.tar.gz ${server}:/tmp/

Write-Host "Publishing..." -ForegroundColor Cyan
ssh -i $key $server "sudo rm -rf /var/www/mhtml/* && sudo tar -xzf /tmp/dist.tar.gz -C /var/www/mhtml --strip-components=1 && sudo systemctl reload nginx"

Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git add -A
git commit -m "." --allow-empty
git push origin main

Write-Host "Done: https://marginmath.cc/math/" -ForegroundColor Green
