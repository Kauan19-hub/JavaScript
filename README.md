**<h2>🚀 Códigos iniciantes de JavaScript 🚀</h2>**

---

Este repositório, foi desenvolvido com o objetivo de ajudar pessoas que estão começando a programar em<br>
JavaScript com códigos báscios e super legais e fáceis de usar!

###

**<h2>📂 Organização dos arquivos:</h2>**

###

├── 📄 JS-US<br>
├── 📄 VSCode<br>
├── 📄 Index2.html<br>
├── 📄 Teste.js<br>
├── 📄 Saudações<br>
├── 📄 Condições<br>
└── 📄 README.md<br>

###

**<h2>📊 Tecnologias usadas:</h2>**

###

- [✔️] HTML5
- [✔️] JavaScript
- [✔️] Node.JS
- [✔️] Visual Studio Code (VSCode)

###

**<h2>💎 Como desenvolver:</h2>**

###

1️⃣- No VSCode, dentro da sua pasta criada, crie dois arquivos, HTML e JS (JavaScript)<br>
2️⃣- No HTML, escreva:

###
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>JavaScript Para Iniciantes</title>
</head>
<body>
  <script src="scripts.js"></script>
</body>
</html>
```

###

Nós precisamos do HTML para desenvolver o JS, na tag `<script>`, digite `src` e escreva o<br>
nome do arquivo do JS que você criou.

###

3️⃣- No JavaScript, siga os comandos básicos:

###
```js
//Declara uma variável e exibe um input
let nome = prompt('Digite seu nome aqui: ')
```

###
```js
//Exibe a mensagem que você digitou
alert(`Prazer em conhecê-lo, ${nome}!`)
```

###

(OBS): Ao exibir o código com `alert`, use crases do início ao fim do código, e use `$` antes<br>
da chave `{ }` que junta a variável com string `str`!

###

4️⃣- Usando `const`

###
```js
const nome = "Maria";
console.log(nome); // Maria

//Tentar mudar o valor causa erro:
nome = "João"; //TypeError: Assignment to constant variable.
```

###

Mudar o valor da variável de forma direta, exibe erro: `TypeError: Assignment to constant variable.`

###
```js
const pessoa = {
  nome: "Carlos",
  idade: 30
};

pessoa.idade = 31; //Permitido
console.log(pessoa.idade); // 31

//Isso causaria erro:
// pessoa = {}; //TypeError
```

###

5️⃣- Exemplo com `array`:

###
```js
const frutas = ["Maçã", "Banana"];
frutas.push("Laranja"); //Permitido
console.log(frutas); // ["Maçã", "Banana", "Laranja"]

// Isso causaria erro:
// frutas = ["Abacaxi"]; //TypeError
```

###

**<h2>✅ Requisitos:</h2>**

###

- Navegador moderno (Chrome, Firefox, Edge);
- Editor de código (VS Code recomendado);
- Conhecimento básico de HTML/CSS ajuda bastante;
- Ter o Node.JS instalado na sua máquina.

###

**<h2>💡 Dicas:</h2>**

###


- Comente seu código para entender o que cada parte faz;
- Tente modificar os exemplos para reforçar o aprendizado;
- Consulte: [Documentação Oficial do JavaScript (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript).

###

**<h2>🏅 Testado em:</h2>**

###

- ✅ Windows 11;
- ✅ Navegador Chrome;
- ✅ Extensão Live Server, VSCode;
- ✅ Mobile (Chrome Android);
- ✅ Node.JS.

###

**<h2>⚙️ Para futuras atualizações:</h2>**

###

Caso você precise adicionar mais algum arquivo dentro de um repositório já existente, desenvolva o seguinte<br>
comando:

###
```bash
git clone (URL_DO_REPOSITÓRIO)
```
###

No terminal, ou bash, digite:

###
```bash
git init
```

###
```bash
git add .
```

###
```bash
git commit -m "(TEXTO)"
```

###
```bash
git push -u origin master
```


**<h2>Muito Obrigado, e Bons Estudos! 👋</h2>**

---

[Acesse o Meu Perfil](https://github.com/Kauan19-hub)








