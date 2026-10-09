# Educa Mais EJA — landing page

Página única em Next.js App Router, TypeScript, Tailwind CSS e GSAP.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000. Para validar a versão de produção, execute `npm run typecheck` e `npm run build`.

## Configuração antes da publicação

1. O WhatsApp oficial `553183696708` está definido em `data/content.ts` para evitar que variáveis antigas da hospedagem alterem o destino dos contatos. Para trocá-lo, atualize essa constante.
2. Confirme com a equipe comercial a elegibilidade e as condições da oferta de **conclusão em 7 dias** e dos valores apresentados.
3. O formulário usa validação no navegador e prepara uma conversa no WhatsApp com os dados preenchidos. O lead só chega à equipe quando o visitante envia a mensagem no WhatsApp. Para registrar leads automaticamente em CRM, conecte o formulário a uma API de captação.
4. O logo e o favicon oficiais já estão incluídos. Verifique apenas se esta marca deve ser usada nesta campanha EJA.

## Meta Pixel

O conjunto novo `LP-EJA-EDUCAMAIS` usa o Pixel **2071542843470802**. O ID fica em `.env.local` (não versionado) como `NEXT_PUBLIC_META_PIXEL_ID`.

O Pixel só carrega depois de o visitante aceitar cookies de marketing. A LP mede `PageView`, `TimeOnPage` (15, 30 e 60 segundos), `ScrollDepth` (25%, 50%, 75% e 90%), `FormStart` (primeira interação com os campos) e `Lead` (envio válido do formulário). Os eventos não incluem nome, idade, modalidade ou conteúdo da conversa. O visitante pode recusar ou reabrir as preferências de privacidade. O formulário é o único caminho para abrir o WhatsApp.

Para ativar em outra máquina ou ambiente, configure `NEXT_PUBLIC_META_PIXEL_ID` com o ID acima e publique a aplicação. A conexão da empresa com a API de Conversões está ativa no Gerenciador de Eventos, mas este projeto envia eventos apenas pelo Pixel do navegador; não há implementação de eventos do servidor. No Gerenciador de Eventos, use **Eventos de teste** com a URL pública para confirmar o recebimento depois da publicação.

## Imagem

`public/images/hero-estudos.webp` foi gerada para este projeto com a ferramenta de imagem integrada e otimizada para web. Prompt resumido: fotografia editorial de uma mesa de estudos com livros, caderno aberto, lápis e luz de janela, espaço azul-marinho para a copy, detalhe magenta, sem pessoas, textos ou logos.

## Marca

O logo em `public/brand/educa-plus-logo.png` e o favicon em `app/favicon.ico` foram obtidos do [site Educa+](https://www.sejaalunoeducamais.com.br/), respectivamente de `/assets/logos/Ativo%2010.png` e `/assets/icons/icon-pink-to-blue.ico`.

## SEO

A URL canônica da página é `https://eja.sejaalunoeducamais.com.br/`. O App Router gera `/robots.txt` e `/sitemap.xml` com essa URL. Após publicar, confirme que ambos respondem no domínio público.
