---
layout: post
title: "Setup Python Version Management: pyenv"
slug: setup-python-version-management-pyenv
categories: [tech, python]
---

shivammathur/homebrew-php is a repository that provides PHP version management for macOS. It allows you to install multiple PHP versions and switch between them easily.

## Installation

In this topic, we will install shivammathur/homebrew-php on macOS.

### Install shivammathur/homebrew-php

> [!NOTE] Before installing shivammathur/homebrew-php, make sure you have installed Homebrew. If you haven't installed Homebrew yet, you can follow the instructions [here](https://brew.sh/).

Add the shivammathur/homebrew-php tap:

```bash
brew tap shivammathur/php
```

### Install PHP

Install the desired PHP version using Homebrew:

```bash
# install PHP 8.4 for example
brew install shivammathur/php/php@8.4

# after installation, you have to link the PHP version
brew link --overwrite --force shivammathur/php/php@8.4

# check the PHP version
php -v # should show PHP 8.4
```

### Switch PHP version

To switch between PHP versions, you can use the `brew link` command:

```bash
# install PHP 7.2 for example, if you haven't installed it yet
brew install shivammathur/php/php@7.2

# switch to PHP 7.2
brew link --overwrite --force shivammathur/php/php@7.2

# check the PHP version
php -v # should show PHP 7.2
```

### Upgrade PHP version

To upgrade to a newer PHP version, you can use the `brew upgrade` command:

```bash
# upgrade to PHP 8.5
brew upgrade shivammathur/php/php@8.5

# after upgrade, you have to link the PHP version
brew link --overwrite --force shivammathur/php/php@8.5

# check the PHP version
php -v # should show PHP 8.5
```

## References

- [shivammathur/homebrew-php](https://github.com/shivammathur/homebrew-php), accessed on 24th December 2024.
