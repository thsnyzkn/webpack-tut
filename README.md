# Bundlers/ Loaders
- Programcılar olarak, kod organizasyonu için projeyi genellikle çeşitli dosyalara ve modül'lere bölmek durumunda kalıyoruz.
- Webpack/Parcel olmasaydı, bu dosya ve modülleri kullanabilmek/yükleyebilmek için index.html dosyamızda script tag'leri arasında referans göstermeliydik.
- Bu şekilde yapmak zihni yorucu ve insan hatasına açık bir yöntem, çünkü eklenme ve yüklenme sıraları konusu çok önemli ve manul olarak yaparken karıştırma ihtimali çok yüksek.
- Webpack/Parcel; ana işlevi bütün bu script dosyalarını akıllıca ve doğru yüklenme sırasıyla organize eden ve bize bir adet bundle dosyası üreten kod dönüştürücüsü olarak tanımlanabilir.
- Webpack için versiyon 4'ten başlayarak sağlanan default değerlerle config dosyası oluşturmadan proje'yi çalıştırabiliyoruz, Parcel'da ise proje başlangıcından itibaren motto'ları no configuration bir araç olmaları. 
- Webpack için *webpack.config.js* isimli bir dosya oluşturmalıyız, Parcel tarafındaki customization'lar içinse *package.json* içerisinde değişiklikler yapıyoruz. 
- Tarayıcıda çalışan module'ler oluşturuyor.
## Webpack
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

### Webpack vs Parcel

### Nuxt'ta konfigurasyon değişikliği nasıl yapılır?