import { es6Test } from './modules/testEs6';
import './sass/style.scss';

// ES6のシンタックスに対応できているかのテスト
es6Test();

// タイトルの挿入
const titles = [...document.getElementsByClassName('title')];
for (const title of titles) {
  title.textContent = '猫の写真';
}
