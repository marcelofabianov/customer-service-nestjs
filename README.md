# CustomerService

Repositório para fins de estudo nas tecnologias de NestJS e Prisma.

## Features

Este projeto em desenvolvimento vai conter as features.

[Features](/backend/_docs/features.md)

## Tecnologias

- NestJS
- Prisma
- Docker
- Postgres

## Pre-requisitos

- Docker
- Git

## Instalação

1. Deixei pronto ambiente docker caso queira utilizar.

```bash
cp docker/local/docker-compose.yml docker-compose.yml && cp docker/local/.zshrc .zshrc
```

Para perfumaria deixei configurado o zshrc que voce pode alterar e personalizar conforme deseja pelo .zshrc na raiz.
Lembrando docker-compose.yml e .zshrc da raiz nao serao versonalizados por causa .gitignore

2. Subir o docker-compose

```bash
docker-compose up -d
```

3. Acessar o container

```bash
docker exec -it backend zsh
```

4. Instalar dependencias

```bash
npm install
```

5. Rodar migrations

```bash
npm run prisma:migrate
```

6. Rodar servidor

```bash
npm run start:dev
```
