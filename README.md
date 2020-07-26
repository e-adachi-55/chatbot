# chatbot

![works_07](https://user-images.githubusercontent.com/64426498/88485256-79eca600-cfaf-11ea-9b43-df0384b6e579.png)


# 概要
Reactの学習を開始したくてトラハックさんのYouTube動画を参考にチャットボットの作成をしました。

# 配信元
トラハックさん（Twitter:@torahack_）

# 学んだこと
Material-UIのスタイルをカスタマイズする

ライフサイクルの活用

# 改善点
curl -X POST https://YOUR_REGION-YOUR_PROJECT_NAME.cloudfunctions.net/addDataset -H "Content-Type:application/json" -d @dataset.json

このコマンドが実行できず、firebaseにデータを入れることができなかった・・・（現在はローカルjsonのまま）

いくつか方法を試したが、jsonからデータがとれていない・・？みたいなので原因を調べて解消する
