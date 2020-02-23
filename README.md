# simple-event-creator

## Overview

- イベント名を入れるだけで専用サイトが自動で作れる Web アプリケーション(詳細も入力化)
- PWA を使用することで、作ったイベントサイトをアプリっぽく使用できる
- プッシュ通知でイベントの情報をリアルタイムにユーザに届けられる

## Description

- ユーザーは必要な項目を入力することでイベント専用サイトを web から作成することができる
- PWA を導入るすため、サイトの使用者はネイティブのアプリと同様な操作感で使用できる
- イベント情報やスケジュールをリアルタイムに更新でき、プッシュ通知なども飛ばせるようにする

## Install

```
yarn install
```

## .env setting

```
cp .env.example .env
vi .env
```

```
// googleのclient_idを設定
// 参考サイト：https://qiita.com/kite_999/items/bddd62c395f260e745bc
REACT_APP_GOOGLE_CLIENT_ID=
```
