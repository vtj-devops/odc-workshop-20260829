# odc-workshop-20260829
Open Developers Conferences 2026のワークショップで使用するリポジトリです。

GitHub CopilotのAskモード（質問・コード理解）を体験するための、TypeScriptベースのシンプルなタスク管理REST APIサンプルコードが含まれています。

## 動作要件
- Node.js v18 以上
- npm v9 以上

## セットアップ & 起動手順

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 開発サーバーの起動
```bash
npm run dev
```
サーバーが `http://localhost:3000` で起動します。

### 3. ビルド & 本番実行
```bash
# TypeScriptのビルド
npm run build

# ビルド成果物の実行
npm start
```

## エンドポイント一覧

| メソッド | パス | 内容 |
| :--- | :--- | :--- |
| `GET` | `/health` | ヘルスチェック |
| `GET` | `/api/tasks` | タスク一覧取得 |
| `GET` | `/api/tasks/:id` | 指定タスクの取得 |
| `POST` | `/api/tasks` | 新規タスクの作成 |
| `PUT` | `/api/tasks/:id` | タスクの更新 |
| `DELETE` | `/api/tasks/:id` | タスクの削除 |

## Copilot Askモードでの体験例

VS CodeのGitHub Copilot Chatパネルで以下のような質問を試してみましょう。

- 「このプロジェクトで使われているプログラミング言語は何ですか？」
- 「どのような主要ライブラリやフレームワークが使われていますか？」
- 「これはどのような目的・機能を持つアプリケーションですか？」

