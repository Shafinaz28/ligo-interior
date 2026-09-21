$root = Join-Path $PSScriptRoot "..\images\projects"
$out = Join-Path $PSScriptRoot "projects-data.js"

$names = [ordered]@{
    "HEMANTH" = @{ id = "hemanth"; name = "Hemanth" }
    "KHS BAGALUR" = @{ id = "khs-bagalur"; name = "KHS Bagalur" }
    "PAVAN" = @{ id = "pavan"; name = "Pavan" }
    "PRADEEP" = @{ id = "pradeep"; name = "Pradeep" }
    "PRAJWAL" = @{ id = "prajwal"; name = "Prajwal" }
    "PUNIT" = @{ id = "punit"; name = "Punit" }
}

$ext = @(".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif")
$lines = @("window.CLIENT_PROJECTS = [")

foreach ($folder in $names.Keys) {
    $dir = Join-Path $root $folder
    if (-not (Test-Path -LiteralPath $dir)) {
        New-Item -ItemType Directory -Force -Path $dir | Out-Null
    }
    $files = Get-ChildItem -LiteralPath $dir -File -ErrorAction SilentlyContinue |
        Where-Object { $ext -contains $_.Extension.ToLower() } |
        Sort-Object {
            if ($_.BaseName -match "(\d+)") { [int]$Matches[1] } else { 0 }
        }, Name |
        ForEach-Object { $_.Name.Replace("\", "\\").Replace("'", "\'") }
    $imageList = ($files | ForEach-Object { "'" + $_ + "'" }) -join ", "
    $meta = $names[$folder]
    $lines += "    { id: '$($meta.id)', name: '$($meta.name)', folder: '$folder', images: [$imageList] },"
}

$lines += "];"
Set-Content -LiteralPath $out -Value ($lines -join "`r`n") -Encoding UTF8
Write-Output "Wrote $out"
