// https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel
import childProcess from 'child_process'

childProcess.execSync(
  `git diff HEAD^ HEAD --quiet ./ ':(exclude)editor' ':(exclude)posts' ':(exclude)data'`
)

process.exit(1)
