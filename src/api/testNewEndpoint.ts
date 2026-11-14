import { type Request, type Response } from "express";

const page = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Hi I just created this from my iPhone</title>
  <style>
    * { box-sizing: border-box; }
    html, body { height: 100%; }
    body {
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
      background: #fff;
      color: #202124;
    }
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 584px;
      padding: 0 20px;
    }
    .logo {
      font-size: clamp(56px, 14vw, 92px);
      font-weight: 500;
      letter-spacing: -2px;
      margin: 0 0 8px;
      line-height: 1;
    }
    .logo span:nth-child(1) { color: #4285f4; }
    .logo span:nth-child(2) { color: #ea4335; }
    .logo span:nth-child(3) { color: #fbbc05; }
    .logo span:nth-child(4) { color: #4285f4; }
    .logo span:nth-child(5) { color: #34a853; }
    .logo span:nth-child(6) { color: #ea4335; }
    .message {
      font-size: 15px;
      color: #5f6368;
      margin: 0 0 24px;
      text-align: center;
    }
    .search {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 12px;
      height: 46px;
      padding: 0 18px;
      border: 1px solid #dfe1e5;
      border-radius: 24px;
      background: #fff;
      transition: box-shadow .2s, border-color .2s;
    }
    .search:focus-within {
      border-color: rgba(223,225,229,0);
      box-shadow: 0 1px 6px rgba(32,33,36,.28);
    }
    .search svg { flex: none; fill: #9aa0a6; }
    .search input {
      flex: 1;
      min-width: 0;
      border: 0;
      outline: 0;
      font-size: 16px;
      background: transparent;
      color: #202124;
    }
    .buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      margin-top: 28px;
    }
    .buttons button {
      font-family: inherit;
      font-size: 14px;
      color: #3c4043;
      background: #f8f9fa;
      border: 1px solid #f8f9fa;
      border-radius: 4px;
      padding: 10px 16px;
      cursor: pointer;
      transition: box-shadow .1s, border-color .1s;
    }
    .buttons button:hover {
      border-color: #dadce0;
      box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    footer {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      padding: 14px 20px;
      font-size: 13px;
      color: #70757a;
      background: #f2f2f2;
      border-top: 1px solid #e4e4e4;
    }
  </style>
</head>
<body>
  <main>
    <h1 class="logo"><span>C</span><span>h</span><span>i</span><span>r</span><span>p</span><span>y</span></h1>
    <p class="message">Hi I just created this from my iPhone</p>
    <form class="search" onsubmit="return false;">
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
      <input type="text" placeholder="Search Chirpy" aria-label="Search Chirpy" />
    </form>
    <div class="buttons">
      <button type="button">Chirpy Search</button>
      <button type="button">I'm Feeling Chirpy</button>
    </div>
  </main>
  <footer>Made on an iPhone &middot; Chirpy</footer>
</body>
</html>`;

export function handlerTestNewEndpoint(req: Request, res: Response): void {
  res.set("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(page);
}
