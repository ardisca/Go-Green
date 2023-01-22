name: Progress Bar CI

on:
  push:
    branches: master
  workflow_dispatch:
  schedule:
    - cron: '5 * * * *'

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '14.x'
    - name: Update README.md
      run: node index.js > README.md
    - name: Commit change & Push
      run: |
          git config user.name 'ardisca'
          git config user.email 'ardisca99@gmail.com'
          git commit -am "let's go green🌳"
          git push
