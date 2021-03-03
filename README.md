### Bundlers/ Loaders
- Programcılar olarak, kod organizasyonu için projeyi genellikle çeşitli dosyalara ve modül'lere bölmek durumunda kalıyoruz.
- Webpack olmasaydı, bu dosya ve modülleri kullanabilmek/yükleyebilmek için index.html dosyamızda script tag'leri arasında referans göstermeliydik.
- Bu şekilde yapmak zihni yorucu ve insan hatasına açık bir yöntem, çünkü yüklenme sıraları konusu çok önemli ve insan eliyle yaparken karıştırma ihtimali çok yüksek.
- Webpack; ana işlevi bütün bu script dosyalarını akıllıca ve doğru yüklenme sırasıyla organize eden ve bize bir adet bundle dosyası üreten kod dönüştürücüsü olarak tanımlanabilir.
- Webpack 4'ten başlayarak sağlanan default değerlerle config dosyası oluşturmadan proje'yi çalıştırabiliyoruz.
- Tarayıcıda çalışan module'ler oluşturuyor.

```javascript
//webpack.config.js
module.exports = {
	//Projenin başlangıç/giriş noktası
	entry: './app/index.js',
	module: {
		//Hangi değişimler ya da derlemeler lazımsa burada belirtiyoruz.
		rules: [
			{ test: /\.(js)$/, use : 'babel-loader' },
			{ test: /\.css$/, use : ['style-loader','css-loader' ] } 
		]
	},
	//Yeni oluşturulmuş bundle'ın yeri.
	output: {
		path: 'dist',
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin()
	],
	//minify code and strip out any warnings.
	mode: process.env.NODE_ENV ==='production' ? 'production' : 'development'
}

```
```javascript
//package.json
"scripts" : {
	"build" : "NODE_ENV='production' && webpack",
	"start" : "webpack serve"
```