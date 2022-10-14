# home-pad
Personal Website

# Packages
```bash
ng add angular-cli-ghpages
```

# Deployment
The deploy command is simple, and we must add a base-href argument with the name of the repository in it:
```bash
ng deploy --base-href=/angular-app/
# Here, the deploy command does all the work. We don’t have to manually build or commit those files.
```