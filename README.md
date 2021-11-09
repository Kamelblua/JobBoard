# Job Board

## Description du projet

JobBoard est une plateforme permet aux utilisateurs de rechercher et de postuler à des emplois proposer par des entreprises.

### Cloner le projet

Via ssh [(comment configurer sa clé SSH)](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

```
$ git clone git@github.com:Kamelblua/JobBoard.git
```

Via https
```
$ git clone https://github.com/Kamelblua/JobBoard.git
```

### Modifier les variables d'environnement

- Modifier les variables d'environnements

Variables d'environnement importantes à modifier/ajouter dans /client :
_(ce fichier n'étant pas présent lors de la première copie du repo, il vous faudra faire une copie de /client/.env.example)_

```
REACT_APP_SERVER_URL=http://localhost:8000
```
Variables d'environnement importantes à modifier dans /server
_(ce fichier n'étant pas présent lors de la première copie du repo, il vous faudra faire une copie de /server/.env.example)_
JTW Token [(comment génerer un JTW token)](https://github.com/AndrewCarterUK/CryptoKey)

```
APP_NAME=Laravel
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000
CLIENT_URL=http://localhost:3000

LOG_CHANNEL=stack
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=jobboard
DB_USERNAME=root
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DRIVER=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=localhost
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=no-reply@italks.com

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

JWT_TOKEN=
```

- Côté serveur (Laravel)

Installer les dépendances :

```
$ cd server
$ composer install
// Commande requise deux fois d$u à certains packects
$ composer install
```

Générer une clé secrète :

```
$ php artisan key:generate
Application key set successfully.
```

Créer le lien symbolique pour le dossier `storage` :

```
$ php artisan storage:link
The links have been created.
```

Effectuer les migrations :

```
$ php artisan migrate:fresh
Dropped all tables successfully.
Migration table created successfully.
Migrating: ...
Migrated: ...
```

- Côté client (React)

```
$ yarn
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in XX.XXs
$ yarn start
yarn run vX.XX.XX
react-scripts start
Starting the development server...
```

- Configuration de Maildev [(installer Docker)](https://docs.docker.com/get-docker/)

```
$ docker pull djfarrelly/maildev
$ docker run -p 1080:80 -p 1025:25 djfarrelly/maildev
```

- Lancer le serveur websocket

```
$ cd server
$ php artisan websocket:serve
```

- Accéder aux services

Accéder au client : localhost:3000
Accéder à l'api : localhost:8000/api
Accèder au serveur mail : localhost:1080
