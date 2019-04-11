# serverless-copy-template
a plugin that let you copy the cloudFormations template to clipboard for easier debugging / diagnostic

# To install:
1. Run `npm i -P serverless-copy-template`
2. add `serverless-copy-template` in your serverless plugin dependencies in the `serverless.yml` file, like zo:
```
...

plugins:
  - serverless-parameter-store
#  - other-plugins?

...
```

# Usage:
Simply add the flag `--copyTemplate`, ot `--ct` at the end of your serverless command, like for instance:
```
sls package --copyTemplate
# Or:
serverless deploy --ct
```
After the command is ran, paste your clipboard in to a text editor and prettify it, there you have the final cloudformation template right before it's sent off to AWS.


I use this mainly for debugging and diagnostics and it saves me a ton of time! hope you find it useful too!
