#!/bin/bash

echo " * * *"
echo " * Installing Vue"
echo " * * *"

echo "Install newest nodejs 8.0 ..."
curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install -y nodejs

echo "Install yarn ... "
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

yarn install

yarn build
