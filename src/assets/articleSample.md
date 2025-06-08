# 🚋 進程與線程（執行緒就是線程）

## 一、概念類比與定義

### 📦 進程（Process）＝教室

- 用來分割不同的應用程式、分配系統資源。
- 在工作管理員中，每一條獨立的應用程式列為一個進程（展開摺疊內為子進程）。
- 例如 Apache HTTP Server：
  - 啟動後會有一個主進程與一個或多個子進程。
- 請求流程：
  1. 瀏覽器輸入 `127.0.0.1:8000/projectA`。
  2. 請求從 Chrome 的進程送出。
  3. 傳遞給 Apache 主進程。
  4. 主進程將請求分派給子進程。
  5. 子進程透過 CGI / FastCGI（PHP 的 SAPI）執行 PHP 程式。
  6. 執行對應專案資料夾內的 PHP 應用程式。

---

### 🧵 線程（Thread）＝學生

- 線程是進程中的執行單元。
- 可同時執行多個任務（並發）。
- 程式設計須考慮「線程安全（Thread-Safe）」：
  - 使用鎖（Lock）、互斥鎖（Mutex）等機制保護資源。
  - 提升穩定性，但降低效率。
- 非線程安全（Non-Thread Safe）：
  - 效能高，但可能出錯（Race Condition）。

---

## 二、PHP 的 SAPI 模式與 Apache 配置

### 📎 SAPI（Server API）

- PHP 與網頁伺服器之間的橋樑。
- 定義 PHP 如何與 Apache/Nginx 等伺服器溝通。
- 不同的 SAPI：
  - `mod_php`：PHP 嵌入 Apache 進程中。
  - `cgi / fastcgi`：每個請求由獨立 PHP 行程（如 `php-cgi.exe`）處理。

---

### 🖥️ Apache 預設使用 mod_php（Windows）

```apache
LoadModule php_module "${PHPROOT}/php8apache2_4.dll"
