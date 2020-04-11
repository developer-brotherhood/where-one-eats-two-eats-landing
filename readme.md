# Where one eats two eats

![logo](./wp-includes/images/food-delivery.png)

Our aim is provide a platform for food donors, food delivery men and people who need help.

# Build

```
docker build --rm -t $(pwd | xargs basename) .
```

# Run with composer

- export variables

```
export MYSQL_HOST=$(hostname -I| awk '{printf $1}')
export MYSQL_ROOT_PASSWORD=changeme
export MYSQL_PORT=3306
export MYSQL_WP_USER=janedoe
export MYSQL_WP_PASSWORD=blindspotkey
export WORDPRESS_DB_NAME=wordpress
export RANDOM_KEY=$(uuidgen)
```

- run docker compose

```
docker-compose up -d
```

and wait some seconds for mysql(you can check its logs)

- Go to localhost or localhost/wp-admin

```
user:admin
pasword:where-one-eats-two-eats
```

# Roadmap

- [ ] add developer section
- [ ] other languages support
- [ ] migrate google forms to wordpress forms
- [ ] add a kind of map
