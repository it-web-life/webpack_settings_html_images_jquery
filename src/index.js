import { es6Test } from './modules/testEs6';
import './sass/style.scss';
import $ from 'jquery';

// ES6のシンタックスに対応できているかのテスト
es6Test();

// タイトルの挿入
const titles = [...document.getElementsByClassName('title')];
for (const title of titles) {
  title.textContent = '猫の写真';
}

// jQueryの処理を追加
const addText = $('<span>').text('jQueryでテキストを挿入しています。')
$('.text').append(addText);
