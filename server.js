import express from 'express';
import { Pool } from 'pg';

const app = express();
const port = 8000;

// PostgreSQL 接続設定
const pool = new Pool({
  host: 'db',
  port: 5432,
  user: 'user',
  password: 'password',
  database: 'todo',
});

// 静的ファイルの表示
app.use(express.static('todo_list'));

// /api/test エンドポイントで test テーブルの全データを返す
app.get('/api/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM test');
    res.json(result.rows);
  } catch (err) {
    console.error('DBエラー:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

// サーバー起動
app.listen(port, () => {
  console.log(`サーバー起動中: http://localhost:${port}`);
});
