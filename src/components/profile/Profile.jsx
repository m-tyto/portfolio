import React from 'react'
import ReactDOM from 'react-dom';
import '../styles/profile.css'; 
import { BrowserRouter, Route, Link } from 'react-router-dom'
import menu from '../photo/menu.jpeg';

const Profile = () => {
    const backgroundImage = {
        backgroundImage: 'url(' + menu + ')',
    }
    return(
        <div className="row">
            <div className="p-all text-center col-12" style={backgroundImage}>
                <h1 className="title p-5 mb-3">Profile</h1>
                <dl>
                    <dd>名前</dd>
                    <dt className="pv">三宅泰斗(Taito Miyake)</dt>
                    <dd>生年月日・年齢</dd>
                    <dt className="pv">1998/02/24 ・ 23才</dt>
                    <dd>職業</dd>
                    <dt className="pv">システムエンジニア</dt>
                    <dd>趣味</dd>
                    <dt className="pv">カラオケ、漫画、アニメ、お酒</dt>
                    <dd>メッセージ</dd>
                    <dt className="pv">
                        完全に熱意だけでエンジニアになった僕ですが、会社の業務の中での学びだけでなく、<br />
                        プログラミングスクールに通うなど、自分のスキルを高めるため行動をし続けています！<br />
                        熱意と行動力が自分の持ち味です！スキルと一緒に磨き続けます！<br />
                        話してみたいな！と思ったら、お気軽に<Link to="/contact">Contact</Link>からご連絡いただけると幸いです！<br />
                        僕のポートフォリオを見てくださったのも何かの縁です。今後ともよろしくお願いいたします！！
                    </dt>
                    
                </dl>
            </div>
        </div>
    )
}

export default Profile