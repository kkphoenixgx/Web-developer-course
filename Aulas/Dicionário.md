# Dicionário css

## atributos css

* **none** : nenhum valor específico.
* **length**: qualquer unidade de medida.
* **unset**: desliga;
* **initial**: voltar ao valor inicial.
* **inherit**: herdar do pai.

* **max-content**:
* **min-content**:
* **fit-content(length)**:

## Box-Model html

* **top**: length;
* **right**: length;
* **bottom**: length;
* **left**: length;

nomes dos espaçamentos dos box-model em ordem(Margin, border, padding, content)

## Propriedades css

* **z-index: number** = (padrão: none)(Valor herdado: não) Pode setar a profundidade de um item

* **height: values** =  
*(padrão auto) (Valor Herdado: não)*
  * **values** =  
    auto;  
    length;  
    initial;  
    inherit;

* **min-height: values** = define valores mínimos  
  *(padrão auto) (Valor Herdado: não)*  
  * **values**:  
    auto;  
    length;  
    initial;  
    inherit;

* **coordinate: valores de box-Model** = determina as posições do selecionado  
*(Valor herdado: não) (não)*

* **Position: values** = Determina qual o tipo de posição determinada pelas coordenadas  
*(sticky)(não)*
  * **values** =  
    **sticky** = determina que a posição é fixada  
    **absolute** = determina que a posição é absoluta a qualquer ordem  
    **relative** = determina que a posição é relativa ao pai}  

## Seletores Css

### Referencias

* **x** = elemento
  1x, 2x = outro elemento
  x¹ =  elemento filho do x
  x² = elemento filho de x¹
  ...
* **y** = atributo
  1y, 2y = outro atributo
* **z** = valor

### Seletores

* **.** = para classes;

* **""*""** seleciona todos os itens do arquivo;

* **=** adiciona outro selecionado

* **"">""** = (x > x¹) seleciona todos os x¹ que o pai é x;

* **+** = (x + y)seleciona todos os y depois do x;

* **~** = (x ~ y)todos os x antes do y;;

* **[]** = ([y])seleciona todos os elementos com y target;

* **[x=z]** = seleciona todos os x que são = z;

* **[x~=z]** = seleciona todos os x que contém z;

* **[x|=y]** = seleciona todos os x que contém algo que começa com z;

* **Identificadores**: #Id

se quiser ver mais que isso, vai [nesse site](https://tableless.com.br/referencia-seletores-css/)
