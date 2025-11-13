---
layout: post
title: "Installing MySQL 5.7 Community Server on AlmaLinux 10"
slug: installing-mysql57-community-server-almalinux10
categories: [tech, postgres]
---

This guide provides step-by-step instructions for installing MySQL 5.7 Community Server on AlmaLinux 10.

## Prerequisites

- AlmaLinux 10 system with sudo privileges
- Internet connection for package downloads

## Installation Steps

### Step 1: Add MySQL Community Repository

Create the MySQL community repository configuration file:

```bash
sudo vim /etc/yum.repos.d/mysql-community.repo
```

Add the following content to the file:

```ini
[mysql57-community]
name=MySQL 5.7 Community Server
baseurl=http://repo.mysql.com/yum/mysql-5.7-community/el/7/$basearch/
enabled=1
gpgcheck=0

[mysql-connectors-community]
name=MySQL Connectors Community
baseurl=http://repo.mysql.com/yum/mysql-connectors-community/el/7/$basearch/
enabled=1
gpgcheck=0

[mysql-tools-community]
name=MySQL Tools Community
baseurl=http://repo.mysql.com/yum/mysql-tools-community/el/7/$basearch/
enabled=1
gpgcheck=0
```

### Step 2: Configure Repository Settings

Ensure MySQL 8.0 is disabled and MySQL 5.7 is enabled:

```bash
# Disable MySQL 8.0 Community Repository
sudo dnf config-manager --disable mysql80-community

# Enable MySQL 5.7 Community Repository
sudo dnf config-manager --enable mysql57-community
```

### Step 3: Install MySQL 5.7 Community Server

Install the MySQL server package:

```bash
sudo dnf install mysql-community-server
```

### Step 4: Start and Enable MySQL Service

Start the MySQL service and enable it to start automatically on boot:

```bash
sudo systemctl enable --now mysqld.service
```

Verify the service is running:

```bash
sudo systemctl status mysqld.service
```

### Step 5: Retrieve Temporary Root Password

MySQL generates a temporary password for the root user during installation. Retrieve it using:

```bash
sudo grep 'A temporary password' /var/log/mysqld.log | tail -1
```

**Example output:**
```
2025-11-12T12:16:18.004506Z 1 [Note] A temporary password is generated for root@localhost: EQ(9h)1AsZen
```

**Important:** Make note of the password (in this example: `EQ(9h)1AsZen`) as you'll need it for the next step.

### Step 6: Secure MySQL Installation

Run the MySQL secure installation script to enhance security:

```bash
sudo mysql_secure_installation
```

Follow the interactive prompts:

1. **Enter the temporary password** you noted in the previous step
2. **Set a new root password** when prompted
3. **Remove anonymous users:** Select `Yes`
4. **Disallow root login remotely:** Select `Yes`
5. **Remove test database:** Select `Yes`
6. **Reload privilege tables:** Select `Yes`

**Example interactive session:**
```
Change the password for root ? (Press y|Y for Yes, any other key for No) : Yes

New password: [Enter your new secure password]
Re-enter new password: [Confirm your password]

Estimated strength of the password: 100
Do you wish to continue with the password provided?: Yes

Remove anonymous users?: Yes
Success.

Disallow root login remotely? : Yes
Success.

Remove test database and access to it? : Yes
 - Dropping test database...
Success.
 - Removing privileges on test database...
Success.

Reload privilege tables now? (Press y|Y for Yes) : Yes
Success.

All done!
```

## Verification

Test your MySQL installation by connecting to the server:

```bash
mysql -u root -p
```

Enter your new root password when prompted. If successful, you'll see the MySQL prompt:

```
mysql>
```

To exit MySQL, type:
```sql
EXIT;
```

## Troubleshooting

### Common Issues

- **Service fails to start:** Check system logs with `sudo journalctl -u mysqld.service`
- **Cannot find temporary password:** Ensure the service started properly and check `/var/log/mysqld.log`
- **Repository conflicts:** Verify repository configuration and ensure conflicting MySQL packages are not installed

### Useful Commands

- Check MySQL version: `mysql --version`
- View MySQL configuration: `sudo cat /etc/my.cnf`
- Monitor MySQL logs: `sudo tail -f /var/log/mysqld.log`

## Security Considerations

- Always use strong passwords for database users
- Consider configuring firewall rules to restrict database access
- Regularly update MySQL to the latest 5.7.x version for security patches
- Backup your databases regularly

## References

- [MySQL 5.7 Documentation](https://dev.mysql.com/doc/refman/5.7/en/)
- [Original Installation Guide](https://computingforgeeks.com/install-mysql-5-7-on-centos-rhel-linux/)
