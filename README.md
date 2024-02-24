# congfiguração

1. inicializar um projeto node.js `npm init -y`
2. instalar Typescript
    2.1. instalacao local `npm install typescript -D`
`Observacao O typescript só serve para o desenvolvimento do codigo`
3. Rodar o TS `npx tsc`
 3.1. Escutando mudancas  `npx tsc index.ts --watch`
4. Configuracao TS `npx tsc --init`
 4.1 Linhas de comandos importantes `noEmitOnError: true`
 4.2 `"outDir": "./dist",`pasta de destino dos arquivos compilados"Dist",