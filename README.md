下載後

先在server.js所屬資料夾src終端機輸入 npm install socket.io,然後在另一個終端機輸入路徑(xxx/chat-app)輸入npm start即可

在src/Chat.js中，我們定義了 Chat 組件，其中包含一個輸入框、發送按鈕和用於顯示聊天消息的列表。 useState 用於管理狀態，useEffect 用於監聽 chat message 事件，收到新消息時更新聊天記錄。


src/index.css中 創建其他樣式和組件：根據需要，創建其他樣式和組件來美化和擴展聊天室界面。例如，創建單個消息組件、輸入框樣式、發送按鈕樣式等。

在src/index.js中 我們將 Chat 組件嵌入到 App 組件中進行渲染，將聊天室組件嵌入到你的應用程序的適當位置。

![chatapp](https://github.com/tsaitsaiji/chat-app/assets/85061424/a957c905-40cc-4f4e-a71a-9c0bf0e8665f)
