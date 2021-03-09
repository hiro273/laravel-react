<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{$category}}一蘭</title>
</head>
<body>
@if ($category == 'news')
<p>本日のニュース</p>
@endif
  <p>{{$category}}</p>
</body>
</html>