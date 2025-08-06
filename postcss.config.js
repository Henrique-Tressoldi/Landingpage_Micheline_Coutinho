// Este é o arquivo de configuração do PostCSS. Ele informa ao Vercel
// como processar o seu CSS para usar o Tailwind CSS e o Autoprefixer.
module.exports = {
  plugins: {
    // A forma correta de referenciar o Tailwind CSS como um plugin do PostCSS
    'tailwindcss': {},
    // O Autoprefixer adiciona prefixos de fornecedor para garantir a compatibilidade do navegador
    'autoprefixer': {},
  },
};
