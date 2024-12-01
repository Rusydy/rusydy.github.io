---
layout: post
slug: install-elixir-with-asdf-on-centos-9
categories: [tech, elixir]
---

In this guide, we will walk you through the process of installing Erlang and Elixir using asdf on CentOS 9. asdf is a version manager that allows you to manage multiple runtime versions on a per-project basis. This makes it easy to switch between different versions of Erlang and Elixir for different projects.

## Step 1: Install asdf

First, we need to install asdf. Clone the asdf repository to your home directory:

```bash
git clone https://github.com/asdf-vm/asdf.git ~/.asdf
```

## Step 2: Update .zshrc Plugins

Next, we need to update our .zshrc file to include asdf. Open your .zshrc file and add asdf to the plugins list:

```bash
plugins=(asdf)
```

This ensures that asdf is loaded whenever you start a new terminal session.

## Step 3: Install Erlang and Elixir Plugins

Now, let's add the plugins for Erlang and Elixir and install the latest versions.

### Install Erlang

Add the Erlang plugin:

```bash
asdf plugin add erlang https://github.com/asdf-vm/asdf-erlang.git
```

Then, install the latest version of Erlang:

```bash
asdf install erlang latest
```

### Install Elixir

Add the Elixir plugin:

```bash
asdf plugin add elixir https://github.com/asdf-vm/asdf-elixir.git
```

Then, install the latest version of Elixir:

```bash
asdf install elixir latest
```

## Step 4: Set Global Versions

Finally, set the global versions of Erlang and Elixir:

```bash
asdf global erlang <version>
asdf global elixir <version>
```

Replace `<version>` with the version number you installed in the previous steps.

That's it! You now have Erlang and Elixir installed using asdf on CentOS 9. You can verify the installations by running the following commands:

```bash
erl -v
elixir --version
```

You should see the version numbers of Erlang and Elixir displayed in the output.

---

References:

- [ohmyzsh plugins for asdf](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf)
- [asdf-erlang](https://github.com/asdf-vm/asdf-erlang)
- [asdf-elixir](https://github.com/asdf-vm/asdf-elixir)
