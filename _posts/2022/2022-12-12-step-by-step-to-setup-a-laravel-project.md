---
layout: post
slug: setup laravel
categories: [tech, php, laravel]
---

Before creating your first Laravel project, you should ensure that your local machine has PHP and [Composer](https://getcomposer.org) installed. If you are developing on macOS, PHP and Composer can be installed via [Homebrew](https://brew.sh/). In addition, we recommend [installing Node and NPM](https://nodejs.org).

After you have installed PHP and Composer, you may create a new Laravel project via the Composer `create-project` command:

```bash
composer create-project laravel/laravel example-app
```

Or, you may create new Laravel projects by globally installing the Laravel installer via Composer:

```bash
composer global require laravel/installer

composer global config bin-dir --absolute # It will return the path to the directory

export PATH="$PATH:/path/to/composer/bin" # Replace /path/to/composer/bin with the path obtained in the previous step

source ~/.zshrc # or source ~/.bashrc
```

After installing the Laravel installer, you may create a new Laravel project using the `laravel new` command:

```bash
laravel new example-app
```

After the project has been created, start Laravel's local development server using the Laravel's Artisan CLI `serve` command:

```bash
cd example-app 

php artisan serve
```

Once you have started the Artisan development server, your application will be accessible in your web browser at `http://localhost:8000`. Next, you're ready to <a href="https://laravel.com/docs/11.x/installation#next-steps" target="_blank">start taking your next steps into the Laravel ecosystem</a>. Of course, you may also want to <a href="https://laravel.com/docs/11.x/installation#databases-and-migrations" target="_blank">configure a database</a>.
