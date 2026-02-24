# Como instalar e rodar o react
É necessario ter instalado o **Node** no computador.

Em seguida, abrir o terminal (CMD) na pasta onde vai ficar o projeto e digitar o comando ```npx creat-next app```
*nota: estamos usando o React junto do **NextJS**

Escolher as seguintes opções na instalação:
-no, customize settings
-Use TypeScript? escolher **NO**
- O restante das opções deixar como padrão

Depois de baixado, se quiser, faça a limpeza dps arquivos padrão que vem no projeto (arquivos de CSS, SVG, ico).

Por fim, para iniciar (rodar) um projeto em React, rodar no terminal o comando ``` npm run dev ```
*nota: tenha certeza de rodar esse comando na pasta raiz do projeto*

## Como criar um modulo/componente em React
Sempre que for criar um modulo ou um componente use essa estrutura:

```
 export default function Produtos() {
    return (
        <div>

        </div>
    )
}
```