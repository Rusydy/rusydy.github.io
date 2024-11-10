---
layout: post
slug: install-elixir-with-kiex-on-centos-9
category: tech, elixir
---

To manage different versions of Erlang and Elixir on your system, follow these steps:

## Step 1: Install Erlang

First, add the Erlang Solutions repository and install the latest stable version of Erlang (currently 26.0 as of October 26th, 2024)

```sh
sudo yum install https://packages.erlang-solutions.com/erlang-solutions-1.0-1.noarch.rpm

sudo yum install erlang
```

## Step 2: Install Kiex

Kiex is a version manager for Elixir. To install Kiex, run the following commands:

```sh
\curl -sSL https://raw.githubusercontent.com/taylor/kiex/master/install | bash -s
```

Add Kiex to your shell configuration by appending the following line to your `~/.zshrc` file:

```sh
echo '[[ -s "$HOME/.kiex/scripts/kiex" ]] && source "$HOME/.kiex/scripts/kiex"' >> ~/.zshrc
```

Reload your shell configuration:

```sh
source ~/.zshrc
```

## Step 3: Install and Set Elixir Version

Install the desired version of Elixir (e.g., 1.17.3) and set it as the default:

```sh
kiex install 1.17.3

kiex default 1.17.3
```

You now have a version manager set up for both Erlang and Elixir, allowing you to easily switch between different versions as needed.

Referenced from:

- [Configure Elixir on Centos](https://anovin.mk/tutorial/how-do-i-install-and-configure-elixir-on-centos/)
- [Kiex GitHub Repository](https://github.com/taylor/kiex)
