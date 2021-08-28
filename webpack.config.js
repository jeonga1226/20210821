//절대 경로인게 좋기 때문에 노드에서 패스를 다뤄줌
const path = require('path')

// commonJS = es5 (module.exports) => 노드에서 기본적으로 채택한 모듈 방식
// esm(Ecma script module) = ex6

// 브라우저에서 동작 x =? node 환경에서 돌아가는 코드
module.exports = {
  entry: path.resolve(__dirname, './src'), // 앞 뒤 경로 합쳐주는 함수, webpack config가 있는 폴더의 경로, index알아서 찾아감
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'], //import 시 확장자 생략가능
  },
  plugins: [],
}
