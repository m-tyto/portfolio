import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../styles/skill.css';
import html from '../image/html.png';
import css from '../image/css.png';
import js from '../image/js.png';
import php from '../image/php.png';
import python from '../image/python.jpeg';
import sql from '../image/sql.png';
import laravel from '../image/laravel.png';
import cake from '../image/cakephp.svg';
import react from '../image/react.png';
import github from '../image/github.png';
import aws from '../image/aws.png';

const Skill = () => {
    const skills = [{
        name : 'HTML',
        img : html,
        description : '業務や学習で使用しています'
    },
    {
        name : 'CSS',
        img : css,
        description : '業務や学習で使用しています'
    },
    {
        name : 'JavaScript',
        img : js,
        description : '業務で簡単な機能を作成しました'
    },
    {
        name : 'PHP',
        img : php,
        description : '業務でもスクールでも使用している言語で、最も自信があ流言語です'
    },
    {
        name : 'Python',
        img : python,
        description : '一番最初に学んだ言語ですが、現在は触ってません'
    },
    {
        name : 'MySQL',
        img : sql,
        description : '業務でも学習でも使用しています。スクールでDB設計の経験もあります'
    },
    {
        name : 'Laravel',
        img : laravel,
        description : 'スクールで学びました。自分で設計してアプリ開発をした事があります'
    },
    {
        name : 'CakePHP',
        img : cake,
        description : '業務で社内システムの保守、機能改良、新機能開発を行っています'
    },
    {
        name : 'React',
        img : react,
        description : 'スクール卒業後に独学で勉強しました。このサイトはReactで作成しました'
    },
    {
        name : 'Git/Github',
        img : github,
        description : '業務でも普段の学習でもソースコード管理を行っています'
    },
    {
        name : 'aws',
        img : aws,
        description : 'スクールで学びました。ubuntuでデプロイ経験があります'
    }];
    return(
        <div>
            <div id="skill" className="text-center my-3"><h2>Skill</h2></div>
            <div className="skill-block row text-center">
                {skills.map((skill) => {
                    return(
                        <div className="skill-area col-4 my-4">
                            <div className="skill-box my-2">
                                <h4 className="skill-name mb-3 pb-3">{skill.name}</h4>
                                <img src={skill.img} alt="skill-image" width="60%" />
                                <p className="description mt-4 pt-3">{skill.description}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Skill