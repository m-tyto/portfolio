import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Profile = () => {
    return(
        <div>
            <dl>
                <dd>名前</dd>
                <dt>三宅泰斗(Taito Miyake)</dt>
                <dd>生年月日・年齢</dd>
                <dt>1998/02/24 ・ 23</dt>
                <dd>職業</dd>
                <dt>システムエンジニア</dt>
                <dd>趣味</dd>
                <dt>カラオケ、漫画、アニメ、お酒</dt>
                <dd>スキル</dd>
                <dl>
                    <dd>プログラミング言語</dd>
                    <dt>HTML, CSS, JavaScript, PHP, SQL</dt>
                    <dd>フレームワーク</dd>
                    <dt>Laravel, cakePHP, React(勉強中)</dt>
                </dl>
                
            </dl>
        </div>
    )
}

export default Profile