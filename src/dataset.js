const defaultDataset = {
    "init": {
        answers: [
            {content: "ポートフォリオを見たい", nextId: "https://e-adachi.com/"},
            {content: "GitHubを見たい", nextId: "https://github.com/e-adachi-55"},
            {content: "足立絵己子について詳しく知りたい", nextId: "details"},
            {content: "その他", nextId: "other"}
        ],
        question: "こんにちは！足立絵己子へのご用件はなんでしょうか？",
    },
    "details": {
        answers: [
            {content: "noteが見たい", nextId: "https://note.com/dati"},
            {content: "どんなことを勉強していますか", nextId: "study"},
            {content: "どんなことが好きですか", nextId: "like"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "興味を持っていただき、ありがとうございます！どんなことを知りたいですか？",
    },
    "study": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "HTML/CSS・JavaScript・PHPを中心に学習中です。最近はReactに興味津々です。",
    },
    "like": {
        answers: [
            {content: "好きな食べ物は何ですか", nextId: "like__food"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "食べることが大好きです。最近自炊することが増えてきてお料理も楽しむようになりました！",
    },
    "like__food": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "お鍋とプリンが好きです。夏場でも鍋を食べる日もあります　笑",
    },
    "other": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "その他についてですね。コチラからお問い合わせできます。",
    },
}

export default defaultDataset