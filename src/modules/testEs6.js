const fruits = ['りんご', 'バナナ', 'メロン', 'いちご', 'キウイ'];

export const es6Test = () => {
  // ES6 アロー関数
  console.log('アロー関数テスト');

  // ES6 map・テンプレートリテラル
  const customFruits = fruits.map((item, index) => `${index}: ${item}`);
  console.log('Array map テスト', customFruits);

  // Map
  let maps = new Map([[1, 'あ'], [2, 'い'], [3, 'う'], [4, 'え'], [5, 'お']]);
  console.log('Mapコレクション テスト', maps);
}
