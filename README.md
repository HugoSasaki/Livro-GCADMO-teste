Projeto do livro do GCADMO

A publicação do site não pode ser feita diretamente, pois precisa do index.html na frente
Como toda vez que muda o livro no R, ele atualiza dentro do _book, não daria muito certo pois o index fora não atualizaria.

Logo, como alternativa, foi criado uma branch chamada Site, onde será salva manualmente a pasta book toda vez que for atualizar o livro.
Sim, é chato lembrar. Tentar automatizar na versão definitiva ou encontrar outro meio.

Código:
  # Mude para a branch do site (ex: gh-pages)
git checkout gh-pages
# Copie os arquivos da pasta de build para a raiz
# Supondo que o GitBook gera os arquivos na pasta "_book"
cp -r _book/* .
git add .
git commit -m "Atualização manual do site"
git push origin gh-pa
git checkout master
