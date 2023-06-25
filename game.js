<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 150px;
    }

    h1 {
      font-size: 24px;
    }

    button {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 18px;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <h1>連打ゲームへようこそ！</h1>
  <button onclick="startNormalMode()">通常モード</button>
  <button onclick="startEndlessMode()">エンドレスモード</button>

  <script>
    function startNormalMode() {
        window.location.href = "main/index.html";
    }
    

    function startEndlessMode() {
        window.location.href = "main/Infinity.html";
    }
  
  </script>
</body>
</html>
