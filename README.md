Cours 1

USER ---> FRONT-END ---> BACK-END : ---> CONTROLLER (routes) ---> SERVICE ---> MODEL (repository)
                                        /--> End-points           /--> Logique métier



===== DTO =====
{
  "nameArticle": "leNom de mon article",
  "price": 12.43,
  ....
}

obj.getNameArticle();

@HttpCode(200)
-> décorateur permettant de spécifier un HttpCode si tout s'est bien passé

DTO : readonly car elle doit rester pur 



===== Nest général =====
Type générique <T> : permet de passer un type dynamique (pagination de plusieurs objets)
Records : permet de faire de clé dynamique 

Faire les 10 premiers tests unitaires à la mano puis IA
-> .spec

Swagger ( documentation d'une API )



===== Partage des types NEST JS =====