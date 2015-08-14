Readme install dependency details

---
### Mac ###

1. install xcode

        https://developer.apple.com/xcode/

2. install homebrew

        http://mxcl.github.io/homebrew/

3. Use homebrew to install `node`, `git`, `ruby`, and `php`

        brew install node
        brew install git
        brew install ruby
        brew tap josegonzalez/php
        brew install php54

4. Use npm to install grunt

        npm install -g grunt-cli

5. Update paths as needed in your `~/.bash_profile`:

        # brew installed binaries
        export PATH=$PATH:/usr/local/bin
        # npm installed binaries
        export PATH=$PATH:/usr/local/share/npm/bin
        # gem installed binaries
        export PATH=$PATH:/usr/local/opt/ruby/bin

5. Close and re-open your terminal so that your new PATH is loaded.
   Make sure to navigate back to your `earthquake-eventadmin` project directory.

---
### Windows ###

1. You will need a terminal tool for Windows.
   [Git Bash (http://git-scm.com/download/win)](http://git-scm.com/download/win)
   was used to test these steps, but
   [Cygwin (http://cygwin.com/install.html)](http://cygwin.com/install.html)
   or another unix-like editor should work too.

  - Choosing PATH environment: We recommend the __last option__ here to include
     Unix tools, but if you don't understand what that entails then use the
     _second option_ which still adds Git to your system PATH.
  - Besides that, all of the defaults should be sufficient.

2. Install the latest release of [Node][] for Windows, using the Windows
   Installer (.msi).

  - All of the defaults should be sufficient for this.

3. Install the latest release of [Ruby][] for Windows, using the executable.

  - All of the defaults should be sufficient for this.

4. Install PHP, from zip.
  1. Download the appropriate zip file from http://windows.php.net/download/
  2. Unzip the folder and copy the contents into a new folder on your C:\ drive.
     `C:\php54`
  3. Add PHP to your PATH.
    1. Right-Click on **My Computer** (or **Computer**) -> **Properties**.
    2. Click **Advanced system settings**.
    3. Click the **Advanced** tab at the top.
    4. Click on **Environment Variables...*.
    5. Find **Path** under the **System variables**, then click **Edit...*
    6. Make sure there is a **;** (semi-colon) after the last item in the list,
       then add `C:\php54;`

5. Close and re-open your terminal so that your new PATH is loaded.
   Make sure to navigate back to your `earthquake-eventadmin` project directory.
   `git config --global url."https://".insteadOf git://`

[Node]: http://nodejs.org/download/
[Ruby]: http://rubyinstaller.org/
