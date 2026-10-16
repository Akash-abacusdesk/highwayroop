$assets = @(
  'hero-home-powertrain.webp',
  'driveline-forming-machining.webp',
  'driveline-quality.webp',
  'quality-lab.webp',
  'lightweighting-ev.webp'
)

$target = Join-Path $PSScriptRoot 'assets'
New-Item -ItemType Directory -Force $target | Out-Null

foreach ($asset in $assets) {
  Invoke-WebRequest -Uri "https://highwayroop.vercel.app/assets/$asset" -OutFile (Join-Path $target $asset)
}

$productSets = @{
  'drivetrain' = @('01','02','04','06','07','03','24','20','14','13','05','11','12','17','15','16','22','23','08','09','10','18','19','21')
  'steering' = @('01','02','03','15','04','05','06','07','12','08','13','09','10','14','11')
  'lightweighting' = @('01','10','02','09','07','08','05','03','04','06')
}

foreach ($set in $productSets.GetEnumerator()) {
  foreach ($number in $set.Value) {
    $name = "$($set.Key)-product-$number.webp"
    Invoke-WebRequest -Uri "https://highwayroop.vercel.app/assets/$name" -OutFile (Join-Path $target $name)
  }
}
