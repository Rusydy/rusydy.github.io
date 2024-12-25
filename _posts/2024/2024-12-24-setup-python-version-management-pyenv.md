---
layout: post
title: "Setup Python Version Management: pyenv"
slug: setup-python-version-management-pyenv
categories: [tech, python]
---

pyenv lets you easily switch between multiple versions of Python. It's simple, unobtrusive, and follows the UNIX tradition of single-purpose tools that do one thing well.

## Installation

In this topic, we will install pyenv on macOS.

### Install pyenv

> [!NOTE] Before installing pyenv, make sure you have installed Homebrew. If you haven't installed Homebrew yet, you can follow the instructions [here](https://brew.sh/).

Install pyenv using Homebrew:

```bash
brew update
brew install pyenv
```

### Add pyenv to zsh profile

Add the following lines to your `~/.zshrc` file:

```bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo '[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init - zsh)"' >> ~/.zshrc
```

## Usage

### List available Python versions

```bash
pyenv install --list
```

### Install Python

```bash
pyenv install 3.12.8
```

### Set Python version globally

```bash
pyenv global 3.12.8
```

### Set Python version locally

```bash
pyenv local 3.12.8
```

### Uninstall Python

```bash
pyenv uninstall 3.12.8
```

### List installed Python versions

```bash
pyenv versions
```

### Update pyenv

```bash
brew upgrade pyenv
```

## PIP

### Install PIP

To install PIP, you do that via the `get-pip.py` script. The script automatically downloads and installs the current pip package for Python.

> [!IMPORTANT] Install pip via `get-pip.py` only with Python3 or later. This method doesn't work for earlier versions.

```bash
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python get-pip.py
```

To verify the installation, run the following command:

```bash
pip --version
```

## References

- [pyenv/pyenv: Simple Python version management](https://realpython.com/intro-to-pyenv/#installing-pyenv), accessed on 24th December 2024.
- [how to install pip on macos](https://phoenixnap.com/kb/install-pip-mac), accessed on 24th December 2024.
