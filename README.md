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



===== Docker MongoDB ===== 
Si vous souhaitez passer par un docker-compose :

Créer un fichier docker-compose.yaml à la racine de votre repo.
Ajouter le contenu suivant dans le fichier https://raw.githubusercontent.com/leo29plns/nestjs-backend/refs/heads/main/docker-compose.yaml
Créez un fichier .env.dev à la racine du repo, avec par exemple :
```
DB_USERNAME=root
DB_PASSWORD=hackmepassword
```


===== Lancement =====

Lancer la commande docker compose up dans le dossier de votre repo.
`docker compose --env-file=".env" up`

MongoDB sera lancé sur le port 27017 , et vous pouvez accéder à une interface d'administration web http://127.0.0.1:8081/

Pour lancer nest JS faites un `pnpm run start:dev` 
et rendez-vous à l'url suivant :
http://localhost:3000 

Pour se connecter depuis mongoose, il faudra rajouter ce param dans l'url : ?authSource=admin