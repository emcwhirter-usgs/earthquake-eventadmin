Earthquake Event Admin
======================

Web application for administering earthquake event products.

[License](LICENSE.md)

## Getting Started ##

### [Install](readme_dependency_install.md) ###
First time install. Walk through dependencies and other considerations.

### Configure ###

Run `./src/lib/pre-install` to setup **config.ini**, use the provided defaults.

### Use ###

To preview in a browser, run `grunt` from the install directory.

---
### Notes ###

This application uses the earthquake responsive template found at
https://github.com/usgs/hazdev-template.git
The responsive template dependency is not bundled during build, so sites
can configure their theme, and must be installed before this application
is deployed.

### Having trouble getting started? ###

If this is your first time using **grunt**, you need to install the grunt
command line interface globally:

      npm install -g grunt-cli
