# 開発環境のセットアップ手順（DevContainer 使用）

このプロジェクトでは、[Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers) を使用して、開発環境をコンテナ上に構築します。

## 前提条件

以下のツールがインストールされている必要があります。

1. [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. [Dev Containers 拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

---

## セットアップ手順

### 1. Docker Desktop のインストール

- 上記リンクから Docker Desktop をダウンロードし、インストールします。
- インストール後、Docker Desktop を起動し、バックグラウンドで動作していることを確認してください。

### 2. Dev Containers 拡張のインストール

- VS Code を開き、拡張機能（Extensions）パネルで `Dev Containers` を検索してインストールします。

### 3. Dev Containers 拡張のインストール

- VS Code を開き、拡張機能（Extensions）パネルで `Dev Containers` を検索してインストールします。

### 4. Dev Containers でフォルダを開く

- VS Codeで Ctrl + Shit + P を押して検索欄に Dev Containers: Reopen in Container を入力して実行する

# アプリケーションサーバー立ち上げ

## 1. 依存関係の解消
ターミナルで

```javascript
npm install
```

を実行する

## 2. アプリケーションサーバー起動
ターミナルで

```javascript
node server.js
```

を実行する

## 3. 動作確認
ブラウザで http://localhost:8000 にアクセスし、画面が表示されることを確認

ブラウザで http://localhost:8000/db/test にアクセスし [{"id":1,"username":"Akamatu"}] が表示されることを確認