import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Message = () => {
    return(
        <dl>
            <dd>Message</dd>
            <dt>
                完全に、熱意だけでエンジニアになった僕ですが、自分の発言に嘘をつきたくないので、
                プログラミングスクールに通うなど自分を高めるため行動をし続けています。
                熱意と行動力が自分の持ち味です。スキルとともに一生かけて磨き続けていきたいと思います。
                自分を応援してくださる方は、contactからご連絡いただけると幸いです！
                ここで、僕のポートフォリオを見てくださったのも何かの縁です。今後ともよろしくお願いいたします！！
            </dt>
        </dl>
    )
}

export default Message